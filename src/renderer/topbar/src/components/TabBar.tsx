import React from 'react'
import { Plus, X } from 'lucide-react'
import { useBrowser } from '../contexts/BrowserContext'
import { Favicon } from '../components/Favicon'
import { TabBarButton } from '../components/TabBarButton'
import { cn } from '@common/lib/utils'

interface TabItemProps {
    id: string
    title: string
    favicon?: string | null
    isActive: boolean
    isPinned?: boolean
    onClose: () => void
    onActivate: () => void
}

const TabItem: React.FC<TabItemProps> = ({
    title,
    favicon,
    isActive,
    isPinned = false,
    onClose,
    onActivate
}) => {
    const baseClassName = cn(
        "relative flex items-center h-7 min-w-[200px] pl-1.5 pr-1.5 select-none rounded-lg",
        "text-primary group/tab transition-all duration-200 cursor-pointer",
        "app-region-no-drag", // Make tabs clickable
        isActive
            ? "bg-background shadow-tab dark:bg-secondary dark:shadow-none"
            : "bg-transparent hover:bg-muted/50 dark:hover:bg-muted/30",
        isPinned ? "w-8 !px-0 justify-center" : ""
    )

    return (
        <div className="py-1 px-0.5">
            <div
                className={baseClassName}
                onClick={() => !isActive && onActivate()}
            >
                {/* Favicon */}
                <div className={cn(!isPinned && "mr-2")}>
                    <Favicon src={favicon} />
                </div>

                {/* Title (hide for pinned tabs) */}
                {!isPinned && (
                    <span className="text-xs truncate max-w-[200px] flex-1">
                        {title || 'New Tab'}
                    </span>
                )}

                {/* Close button (shows on hover) */}
                {!isPinned && (
                    <div
                        onClick={(e) => {
                            e.stopPropagation()
                            onClose()
                        }}
                        className={cn(
                            "flex-shrink-0 p-1 rounded-md transition-opacity",
                            "hover:bg-muted dark:hover:bg-muted/50",
                            "opacity-0 group-hover/tab:opacity-100",
                            isActive && "opacity-100"
                        )}
                    >
                        <X className="size-3 text-primary dark:text-primary" />
                    </div>
                )}
            </div>
        </div>
    )
}

export const TabBar: React.FC = () => {
    const { tabs, createTab, closeTab, switchTab, isLoading } = useBrowser()

    const handleCreateTab = () => {
        createTab('https://www.google.com')
    }

    // Extract favicon from URL (simplified - you might want to improve this)
    const getFavicon = (url: string) => {
        try {
            const domain = new URL(url).hostname
            return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`
        } catch {
            return null
        }
    }

    return (
        <div className="flex-1 overflow-x-hidden flex items-center">
            {/* macOS traffic lights spacing */}
            <div className="pl-20" />

            {/* Tabs */}
            <div className="overflow-x-auto flex">
                {tabs.map(tab => (
                    <TabItem
                        key={tab.id}
                        id={tab.id}
                        title={tab.title}
                        favicon={getFavicon(tab.url)}
                        isActive={tab.isActive}
                        onClose={() => closeTab(tab.id)}
                        onActivate={() => switchTab(tab.id)}
                    />
                ))}
            </div>

            {/* Add Tab Button */}
            <div className="pl-0.5">
                <TabBarButton
                    Icon={Plus}
                    onClick={handleCreateTab}
                />
            </div>
        </div>
    )
}

