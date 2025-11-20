import React, { useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight, RefreshCw, Loader2, PanelLeftClose, PanelLeft } from 'lucide-react'
import { useBrowser } from '../contexts/BrowserContext'
import { ToolBarButton } from '../components/ToolBarButton'
import { Favicon } from '../components/Favicon'
import { DarkModeToggle } from '../components/DarkModeToggle'
import { cn } from '@common/lib/utils'

export const AddressBar: React.FC = () => {
    const { activeTab, navigateToUrl, goBack, goForward, reload, isLoading } = useBrowser()
    const [url, setUrl] = useState('')
    const [isEditing, setIsEditing] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    // Update URL when active tab changes
    useEffect(() => {
        if (activeTab && !isEditing) {
            setUrl(activeTab.url || '')
        }
    }, [activeTab, isEditing])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!url.trim()) return

        let finalUrl = url.trim()

        // Add protocol if missing
        if (!finalUrl.startsWith('http://') && !finalUrl.startsWith('https://')) {
            // Check if it looks like a domain
            if (finalUrl.includes('.') && !finalUrl.includes(' ')) {
                finalUrl = `https://${finalUrl}`
            } else {
                // Treat as search query
                finalUrl = `https://www.google.com/search?q=${encodeURIComponent(finalUrl)}`
            }
        }

        navigateToUrl(finalUrl)
        setIsEditing(false)
        setIsFocused(false)
            ; (document.activeElement as HTMLElement)?.blur()
    }

    const handleFocus = () => {
        setIsEditing(true)
        setIsFocused(true)
    }

    const handleBlur = () => {
        setIsEditing(false)
        setIsFocused(false)
        // Reset to current tab URL if editing was cancelled
        if (activeTab) {
            setUrl(activeTab.url || '')
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            setIsEditing(false)
            setIsFocused(false)
            if (activeTab) {
                setUrl(activeTab.url || '')
            }
            ; (e.target as HTMLInputElement).blur()
        }
    }

    const canGoBack = activeTab !== null
    const canGoForward = activeTab !== null

    // Extract domain and title for display
    const getDomain = () => {
        if (!activeTab?.url) return ''
        try {
            const urlObj = new URL(activeTab.url)
            return urlObj.hostname.replace('www.', '')
        } catch {
            return activeTab.url
        }
    }

    const getPath = () => {
        if (!activeTab?.url) return ''
        try {
            const urlObj = new URL(activeTab.url)
            return urlObj.pathname + urlObj.search + urlObj.hash
        } catch {
            return ''
        }
    }

    const getFavicon = () => {
        if (!activeTab?.url) return null
        try {
            const domain = new URL(activeTab.url).hostname
            return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`
        } catch {
            return null
        }
    }

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
        // Send IPC event to toggle sidebar
        if (window.topBarAPI) {
            window.topBarAPI.toggleSidebar()
        }
    }

    return (
        <>
            {/* Navigation Controls */}
            <div className="flex gap-1 app-region-no-drag">
                <ToolBarButton
                    Icon={ArrowLeft}
                    onClick={goBack}
                    active={canGoBack && !isLoading}
                />
                <ToolBarButton
                    Icon={ArrowRight}
                    onClick={goForward}
                    active={canGoForward && !isLoading}
                />
                <ToolBarButton
                    onClick={reload}
                    active={activeTab !== null && !isLoading}
                >
                    {isLoading ? (
                        <Loader2 className="size-4 animate-spin" />
                    ) : (
                        <RefreshCw className="size-4" />
                    )}
                </ToolBarButton>
            </div>

            {/* Address Bar */}
            {isFocused ? (
                // Expanded State
                <form onSubmit={handleSubmit} className="flex-1 min-w-0 max-w-full">
                    <div className="bg-background rounded-lg shadow-md p-1 dark:bg-secondary">
                        <input
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onKeyDown={handleKeyDown}
                            className="w-full px-1 py-0.5 text-xs outline-none bg-transparent text-foreground truncate"
                            placeholder={activeTab ? "Enter URL or search term" : "No active tab"}
                            disabled={!activeTab}
                            spellCheck={false}
                            autoFocus
                        />
                    </div>
                </form>
            ) : (
                // Collapsed State
                <div
                    onClick={handleFocus}
                    className={cn(
                        "flex-1 px-1.5 h-7 rounded-lg cursor-text group/address-bar bg-muted",
                        "hover:bg-muted text-muted-foreground app-region-no-drag",
                        "transition-colors duration-200",
                        "dark:hover:bg-muted/50"
                    )}
                >
                    <div className="flex h-full items-center">
                        {/* Favicon */}
                        <div className="size-4 mr-2">
                            <Favicon src={getFavicon()} />
                        </div>

                        {/* URL Display */}
                        <div className="text-[0.8rem] leading-tight truncate flex-1">
                            {activeTab ? (
                                <>
                                    <span className="text-foreground dark:text-foreground">{getDomain()}</span>
                                    <span className="group-hover/address-bar:hidden text-muted-foreground/60">
                                        {activeTab.title && ` / ${activeTab.title}`}
                                    </span>
                                    <span className="group-hover/address-bar:inline hidden text-muted-foreground/60">
                                        {getPath()}
                                    </span>
                                </>
                            ) : (
                                <span className="text-muted-foreground">No active tab</span>
                            )}
                        </div>

                    </div>
                </div>
            )}

            {/* Actions Menu */}
            <div className="flex items-center gap-1 app-region-no-drag">
                <DarkModeToggle />
                <ToolBarButton
                    Icon={isSidebarOpen ? PanelLeftClose : PanelLeft}
                    onClick={toggleSidebar}
                    toggled={isSidebarOpen}
                />
            </div>
        </>
    )
}