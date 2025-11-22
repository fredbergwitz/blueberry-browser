import { useState, useEffect } from 'react'
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
        id: 'astrid',
        name: 'Astrid',
        url: '/models/Hexagon-idle.glb',
        instructions: 'Think sharp',
        skills: 'Analyze product, Update CRM, Qualify leads',
        notes: 'Sales pro',
        color: 'yellow-500',
        shape: 'Triangle',
    },
    {
        id: 'henry',
        name: 'Henry',
        url: '/models/Square-idle.glb',
        instructions: 'Be helpful',
        skills: 'Write code, Debug issues, Review PRs',
        notes: 'Programming specialist',
        color: 'blue-500',
        shape: 'Square',
    },
    {
        id: 'sally',
        name: 'Sally',
        url: '/models/Triangle-idle.glb',
        instructions: 'Stay creative',
        skills: 'Source candidates, Screen resumes, Schedule interviews',
        notes: 'Recruiting expert',
        color: 'green-500',
        shape: 'Triangle',
    },
    {
        id: 'emma',
        name: 'Emma',
        url: '/models/Square-idle.glb',
        instructions: 'Stay balanced',
        skills: 'Write docs, Create content, Plan campaigns',
        notes: 'Marketing lead',
        color: 'red-500',
        shape: 'Square',
    },
    {
        id: 'david',
        name: 'David',
        url: '/models/Hexagon-idle.glb',
        instructions: 'Be quick',
        skills: 'Handle tickets, Resolve issues, Escalate problems',
        notes: 'Support agent',
        color: 'yellow-500',
        shape: 'Hexagon',
    },
    {
        id: 'lisa',
        name: 'Lisa',
        url: '/models/Triangle-idle.glb',
        instructions: 'Stay focused',
        skills: 'Track metrics, Generate reports, Analyze data',
        notes: 'Data analyst',
        color: 'orange-500',
        shape: 'Triangle',
    },
    {
        id: 'james',
        name: 'James',
        url: '/models/Square-idle.glb',
        instructions: 'Be solid',
        skills: 'Design UI, Create mockups, Prototype features',
        notes: 'UX designer',
        color: 'teal-500',
        shape: 'Square',
    },
]

const ModelItem = ({ url, name, isActive }: { url: string; name: string; isActive: boolean }) => {
    return (
        <div
            className={cn(
                'flex aspect-square items-center justify-center border bg-background rounded-sm overflow-hidden transition-all duration-300 ease-out scale-75',
                isActive
                    ? 'border-persona scale-75'
                    : 'border-zinc-200 dark:border-zinc-800 scale-100'
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

    useEffect(() => {
        const persona = personas[selectedIndex]
        if (!persona) return

        document.documentElement.dataset.theme = persona.color
    }, [selectedIndex])

    return (
        <div className="relative w-full max-w-[300px] mx-auto">
            <Carousel
                className="
                    relative
                    /* Left Gradient (Before) */
                    before:absolute before:inset-0 before:z-10 before:pointer-events-none
                    before:bg-gradient-to-r before:from-background before:from-0% before:to-transparent before:to-40%
                    /* Right Gradient (After) */
                    after:absolute after:inset-0 after:z-10 after:pointer-events-none
                    after:bg-gradient-to-l after:from-background after:from-0% after:to-transparent after:to-40%
                "
                index={selectedIndex}
                onIndexChange={setSelectedIndex}
            >
                <CarouselContent>
                    <CarouselItem className="basis-[37.5%]">
                        <div className="aspect-square" />
                    </CarouselItem>

                    {personas.map((persona, i) => (
                        <CarouselItem key={persona.id} className="basis-1/4">
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
