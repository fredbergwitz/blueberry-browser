import React from 'react'
import { BrowserProvider } from './contexts/BrowserContext'
import { TabBar } from './components/TabBar'
import { AddressBar } from './components/AddressBar'

export const TopBarApp: React.FC = () => {
    return (
        <BrowserProvider>
            <div className="flex flex-col bg-background select-none">
                {/* Tab Bar */}
                <div className="w-full pr-2 flex items-center app-region-drag">
                    <TabBar />
                </div>

                {/* Toolbar */}
                <div className="flex items-center px-2 gap-2 app-region-drag bg-background z-10">
                    <AddressBar />
                </div>
            </div>
        </BrowserProvider>
    )
}
