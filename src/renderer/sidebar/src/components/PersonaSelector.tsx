import { useState } from 'react'
import { cn } from '@common/lib/utils'
import {
    Carousel,
    CarouselContent,
    CarouselNavigation,
    CarouselItem,
} from '@common/components/Carousel'
import Model from './ModelCanvas'

type Persona = {
    id: string
    name: string
    url: string
    instructions?: string
    skills?: string
    notes?: string
    color?: string
    shape?: string
}

const personas: Persona[] = [
    {
        id: 'marcus',
        name: 'Marcus',
        url: '/models/Triangle-idle.glb',
        instructions: 'Think sharp',
        skills: 'Analyze product, Update CRM, Qualify leads',
        notes: 'Sales pro',
        color: 'Green',
        shape: 'Triangle',
    },
    {
        id: 'henry',
        name: 'Henry',
        url: '/models/Square-idle.glb',
        instructions: 'Be helpful',
        skills: 'Write code, Debug issues, Review PRs',
        notes: 'Programming specialist',
        color: 'Blue',
        shape: 'Square',
    },
    {
        id: 'sally',
        name: 'Sally',
        url: '/models/Hexagon-idle.glb',
        instructions: 'Stay creative',
        skills: 'Source candidates, Screen resumes, Schedule interviews',
        notes: 'Recruiting expert',
        color: 'Purple',
        shape: 'Hexagon',
    },
    {
        id: 'emma',
        name: 'Emma',
        url: '/models/Square-idle.glb',
        instructions: 'Stay balanced',
        skills: 'Write docs, Create content, Plan campaigns',
        notes: 'Marketing lead',
        color: 'Red',
        shape: 'Square',
    },
    {
        id: 'david',
        name: 'David',
        url: '/models/Hexagon-idle.glb',
        instructions: 'Be quick',
        skills: 'Handle tickets, Resolve issues, Escalate problems',
        notes: 'Support agent',
        color: 'Yellow',
        shape: 'Hexagon',
    },
    {
        id: 'lisa',
        name: 'Lisa',
        url: '/models/Triangle-idle.glb',
        instructions: 'Stay focused',
        skills: 'Track metrics, Generate reports, Analyze data',
        notes: 'Data analyst',
        color: 'Orange',
        shape: 'Triangle',
    },
    {
        id: 'james',
        name: 'James',
        url: '/models/Square-idle.glb',
        instructions: 'Be solid',
        skills: 'Design UI, Create mockups, Prototype features',
        notes: 'UX designer',
        color: 'Teal',
        shape: 'Square',
    },
]

const ModelItem = ({ url, name, isActive }: { url: string; name: string; isActive: boolean }) => {
    return (
        <div
            className={cn(
                'flex aspect-square items-center justify-center border bg-background rounded-sm overflow-hidden transition-all duration-300 ease-out',
                isActive
                    ? 'border-zinc-950 opacity-100 dark:border-zinc-50'
                    : 'border-zinc-200 opacity-30 dark:border-zinc-800'
            )}
        >
            <div className="relative w-full h-full overflow-hidden">
                <Model url={url} name={name} />
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,var(--tw-gradient-stops))] from-transparent from-60% to-background to-80%"></div>
            </div>
        </div>
    )
}

export function PersonaSelector() {
    const [selectedIndex, setSelectedIndex] = useState(0)

    return (
        <div className="relative w-full max-w-[300px] mx-auto">
            <Carousel index={selectedIndex} onIndexChange={setSelectedIndex}>
                <CarouselContent>
                    <CarouselItem className="basis-1/3">
                        <div className="aspect-square" /> {/* Spacer */}
                    </CarouselItem>
                    {personas.map((persona, i) => (
                        <CarouselItem key={persona.id} className="basis-1/3">
                            <ModelItem
                                url={persona.url}
                                name={persona.name}
                                isActive={selectedIndex === i}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNavigation />
            </Carousel>
        </div>
    )
}
