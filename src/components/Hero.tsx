

export default function Hero() {
    return (
        <section className="relative w-full">
            <div
                className="w-full flex min-h-[560px] flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-20 text-center"
                role="img"
                aria-label="Group of diverse female engineers in safety helmets looking confident"
                style={{ backgroundImage: 'linear-gradient(rgba(125, 37, 134, 0.85), rgba(125, 37, 134, 0.65)), url("/hero.jpg")' }}
            >
                <div className="max-w-3xl flex flex-col items-center gap-6 animate-fade-in-up">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl drop-shadow-sm">
                        Empowering the Next Generation of Female Engineers
                    </h1>
                    <p className="text-white/90 text-lg font-medium leading-relaxed max-w-2xl">
                        Join the premier student organization for female engineers at the University of Lagos. Connect, grow, and lead.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <a className="flex min-w-[160px] h-12 cursor-pointer items-center justify-center rounded-lg bg-accent px-6 text-white text-base font-bold shadow-lg hover:bg-[#a02eac] transition-colors" href="#register">
                            Become a Member
                        </a>
                        <a className="flex min-w-[160px] h-12 cursor-pointer items-center justify-center rounded-lg bg-white/10 backdrop-blur-md border border-white/30 px-6 text-white text-base font-bold hover:bg-white/20 transition-colors" href="#about">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
