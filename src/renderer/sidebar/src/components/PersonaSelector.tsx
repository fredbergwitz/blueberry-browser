import {
    Carousel,
    CarouselContent,
    CarouselNavigation,
    CarouselItem,
} from '@common/components/Carousel'
import Model from './ModelCanvas'

const ModelItem = () => (
    <div className="relative w-full h-full overflow-hidden bg-background">
        <Model url="/models/Square-idle.glb" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,var(--tw-gradient-stops))] from-transparent from-60% to-background to-80%"></div>
    </div>
)

export function PersonaSelector() {
    return (
        <div className="relative w-full max-w-[300px] mx-auto">
            <Carousel>
                <CarouselContent>
                    <CarouselItem className="basis-1/3">
                        <div className="flex aspect-square items-center justify-center">
                            {/* No Model - Empty Slot */}
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <div className="flex aspect-square items-center justify-center border-b border-l border-t border-zinc-200 dark:border-zinc-800">
                            <div className="relative w-full h-full overflow-hidden bg-background">
                                <Model url="/models/Square-idle.glb" />
                                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,var(--tw-gradient-stops))] from-transparent from-60% to-background to-80%"></div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                            <div className="relative w-full h-full overflow-hidden bg-background">
                                <Model url="/models/Hexagon-idle.glb" />
                                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,var(--tw-gradient-stops))] from-transparent from-60% to-background to-80%"></div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <div className="flex aspect-square items-center justify-center border-b border-r border-t border-zinc-200 dark:border-zinc-800">
                            <div className="relative w-full h-full overflow-hidden bg-background">
                                <Model url="/models/Triangle-idle.glb" />
                                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,var(--tw-gradient-stops))] from-transparent from-60% to-background to-80%"></div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <div className="flex aspect-square items-center justify-center border-b border-r border-t border-zinc-200 dark:border-zinc-800">
                            <div className="relative w-full h-full overflow-hidden bg-background">
                                <Model url="/models/Square-idle.glb" />
                                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,var(--tw-gradient-stops))] from-transparent from-60% to-background to-80%"></div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <div className="flex aspect-square items-center justify-center border-b border-r border-t border-zinc-200 dark:border-zinc-800">
                            <ModelItem />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <div className="flex aspect-square items-center justify-center border-b border-r border-t border-zinc-200 dark:border-zinc-800">
                            <ModelItem />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                        <div className="flex aspect-square items-center justify-center border-b border-r border-t border-zinc-200 dark:border-zinc-800">
                            <ModelItem />
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselNavigation />
            </Carousel>
        </div>
    )
}
