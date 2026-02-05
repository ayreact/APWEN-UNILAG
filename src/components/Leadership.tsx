

export default function Leadership() {
    return (
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-white/5 -mx-6 lg:-mx-20 px-6 lg:px-20 rounded-lg" id="leadership">
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center mb-12">
                    <span className="text-accent font-bold uppercase tracking-wider text-sm">Governance</span>
                    <h2 className="text-[#181019] dark:text-white text-3xl md:text-4xl font-black leading-tight mt-2">
                        Meet Our Leadership
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="flex flex-col items-center p-6 bg-white dark:bg-[#2a1b2b] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 text-center">
                        <div className="w-32 h-32 rounded-full mb-4 overflow-hidden border-4 border-primary/20">
                            <img
                                src="apwen-chairman-lagos-chapter.jpeg"
                                alt="Engr. Bosede M. Oyekunle - APWEN Lagos Chairman"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-[#181019] dark:text-white">Engr. Bosede M. Oyekunle FNSE</h3>
                        <p className="text-primary font-semibold mt-1">Chairman - APWEN Lagos</p>
                        <div className="flex gap-3 mt-4">
                            <a className="text-gray-400 hover:text-accent" href="mailto:info@apwenlagos.org" aria-label="Email Engr. Bosede M. Oyekunle" target="_blank"><span className="material-symbols-outlined" style={{ fontSize: '20px' }}>mail</span></a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-6 bg-white dark:bg-[#2a1b2b] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 text-center">
                        <div className="w-32 h-32 rounded-full mb-4 overflow-hidden border-4 border-primary/20">
                            <img
                                src="apwen-unilag-president.jpg"
                                alt="Korede Joddah - APWEN UNILAG President"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-[#181019] dark:text-white">Korede Joddah</h3>
                        <p className="text-primary font-semibold mt-1">President - APWEN UNILAG</p>
                        <div className="flex gap-3 mt-4">
                            <a className="text-gray-400 hover:text-accent" href="mailto:apwenunilagchapter@gmail.com" aria-label="Email Korede Joddah" target="_blank"><span className="material-symbols-outlined" style={{ fontSize: '20px' }}>mail</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
