

export default function About() {
    return (
        <section className="py-16 md:py-24 border-b border-gray-100 dark:border-gray-800" id="about">
            <div className="flex flex-col gap-10">
                <div className="text-center mb-4">
                    <span className="text-accent font-bold uppercase tracking-wider text-sm">Who We Are</span>
                    <h2 className="text-[#181019] dark:text-white text-3xl md:text-4xl font-black leading-tight mt-2">
                        Our Mission & Vision
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-4 rounded-2xl border border-[#e2d3e4] bg-white dark:bg-[#2a1b2b] dark:border-gray-700 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                            <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>public</span>
                        </div>
                        <h3 className="text-primary dark:text-purple-400 text-xl font-bold">About APWEN</h3>
                        <div className="w-12 h-1 bg-accent rounded-full"></div>
                        <p className="text-[#4a4a4a] dark:text-gray-300 leading-relaxed">
                            The Association of Professional Women Engineers of Nigeria (APWEN) is a catalyst for the advancement of women in the engineering profession towards national development and global competitiveness.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 rounded-2xl border border-[#e2d3e4] bg-white dark:bg-[#2a1b2b] dark:border-gray-700 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                            <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>school</span>
                        </div>
                        <h3 className="text-primary dark:text-purple-400 text-xl font-bold">About APWEN UNILAG Chapter</h3>
                        <div className="w-12 h-1 bg-accent rounded-full"></div>
                        <p className="text-[#4a4a4a] dark:text-gray-300 leading-relaxed">
                            The UNILAG Chapter is dedicated to nurturing the next generation of female engineering leaders through mentorship, technical workshops, networking events, and a supportive community right here on campus.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
