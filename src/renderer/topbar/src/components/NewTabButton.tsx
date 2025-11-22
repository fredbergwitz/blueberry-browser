import React from 'react'
import { LucideIcon } from 'lucide-react'
import { cn } from '../../../common/lib/utils'

interface NewTabButtonProps {
    Icon: LucideIcon
    onClick?: () => void
    className?: string
}

export const NewTabButton: React.FC<NewTabButtonProps> = ({ Icon, onClick, className }) => {
    return (
        <div
            className={cn(
                'group relative flex items-center justify-center h-7 w-7 rounded-md',
                'app-region-no-drag cursor-pointer',
                className
            )}
            onClick={onClick}
            tabIndex={-1}
        >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="transition-transform duration-300 ease-out scale-0 group-hover:scale-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-7 w-7 text-green-500 fill-current animate-[spin_3s_linear_infinite]"
                    >
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    </svg>
                </div>
            </div>
            <Icon className="relative z-10 size-4 transition-colors duration-200 group-hover:text-background" />
        </div>
    )
}
