import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { events } from "../data/events";

export default function Events() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
        AutoPlay({ delay: 3000, stopOnInteraction: false }),
    ]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="py-16 md:py-24" id="events">
            <div className="flex flex-col gap-10">
                <div className="flex justify-between items-end mb-4 px-4 md:px-0">
                    <div>
                        <span className="text-accent font-bold uppercase tracking-wider text-sm">
                            Gallery
                        </span>
                        <h2 className="text-[#181019] dark:text-white text-3xl md:text-4xl font-black leading-tight mt-2">
                            Past Events
                        </h2>
                    </div>
                    <a
                        className="hidden md:flex items-center gap-1 text-primary font-bold hover:underline"
                        href="https://drive.google.com/drive/folders/1-RaB5X_Mp4iIpxsmDrrlFUFshx2yXGu-"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View All{" "}
                        <span className="material-symbols-outlined text-xs">
                            arrow_forward
                        </span>
                    </a>
                </div>

                <div className="group relative">
                    <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                        <div className="flex -ml-6">
                            {events.map((event, index) => (
                                <div
                                    key={index}
                                    className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6"
                                >
                                    <div className="group/item relative overflow-hidden rounded-xl h-64 md:h-80 select-none">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none"></div>
                                        <img
                                            src={event.image}
                                            alt={event.alt || event.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                                            loading="lazy"
                                        />

                                        <div className="absolute bottom-0 left-0 p-6 z-20 w-full pointer-events-none">
                                            <span className="inline-block px-2 py-1 bg-accent text-white text-xs font-bold rounded mb-2">
                                                {event.category}
                                            </span>
                                            <h3 className="text-white text-xl font-bold leading-tight">
                                                {event.title}
                                            </h3>
                                            <p className="text-gray-200 text-sm mt-1 opacity-100 md:opacity-0 md:group-hover/item:opacity-100 transition-opacity duration-300">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={scrollPrev}
                        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/90 text-white hover:text-primary p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 z-30 cursor-pointer"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/90 text-white hover:text-primary p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 z-30 cursor-pointer"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
}
