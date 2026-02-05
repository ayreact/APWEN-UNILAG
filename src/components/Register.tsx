import { useState } from 'react';
import type { FormEvent } from 'react';
import { Loader2 } from 'lucide-react';

export default function Register() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        const apiUrl = import.meta.env.VITE_API_URL;

        console.group('📝 Form Submission Debug Log');
        console.log('🚀 Payload being sent to:', apiUrl);
        console.log('📦 Data:', data);

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const responseData = await response.json().catch(() => null);

            console.log('📡 Response Status:', response.status);
            console.log('📩 Response Data:', responseData);

            if (!response.ok) {
                console.warn('⚠️ API returned an error, but showing success UI as requested.');
            } else {
                console.log('✅ Submission Successful');
            }

        } catch (error) {
            console.error('❌ Network/Submission Error:', error);
            console.warn('⚠️ Showing success UI despite error as requested.');
        } finally {
            console.groupEnd();
            setIsSubmitting(false);
            setIsSuccess(true);
        }
    };

    if (isSuccess) {
        return (
            <section className="py-16 md:py-24" id="register">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="bg-white dark:bg-[#2a1b2b] rounded-3xl shadow-2xl overflow-hidden min-h-[600px] flex items-center justify-center p-8 md:p-12 text-center animate-fade-in">
                        <div className="max-w-lg">
                            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="material-symbols-outlined text-green-600 text-5xl">check_circle</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-900 dark:text-white">
                                Registration Successful!
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                                Thank you for registering. We have received your details and will be in touch shortly. Welcome to the community!
                            </p>
                            <button
                                onClick={() => window.location.reload()}
                                className="px-8 py-3 bg-accent text-white font-bold rounded-xl hover:bg-[#a02eac] transition-all transform hover:scale-[1.02] shadow-lg cursor-pointer"
                            >
                                Back to Home
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 md:py-24" id="register">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="bg-white dark:bg-[#2a1b2b] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-5/12 bg-accent p-6 md:p-12 text-white flex flex-col justify-center relative">
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                            <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white mix-blend-overlay"></div>
                            <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-white mix-blend-overlay"></div>
                        </div>

                        <div className="relative z-10">
                            <span className="font-bold uppercase tracking-wider text-sm opacity-90 mb-2 block">Join Us</span>
                            <h2 className="text-3xl md:text-4xl font-black leading-tight mb-6">
                                Become a Member Today
                            </h2>
                            <p className="text-white/90 text-lg mb-8 leading-relaxed">
                                Join a community of ambitious female engineers. Gain access to mentorship, exclusive workshops, industrial visits, and a network that supports your career growth.
                            </p>

                            <div className="flex flex-col gap-5">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 backdrop-blur-sm">
                                        <span className="material-symbols-outlined text-white">check</span>
                                    </div>
                                    <span className="font-medium text-lg">Access to professional mentorship</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 backdrop-blur-sm">
                                        <span className="material-symbols-outlined text-white">check</span>
                                    </div>
                                    <span className="font-medium text-lg">Exclusive industry visits</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 backdrop-blur-sm">
                                        <span className="material-symbols-outlined text-white">check</span>
                                    </div>
                                    <span className="font-medium text-lg">Networking opportunities</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-7/12 p-6 md:p-12 bg-gray-50 dark:bg-[#1e131f]">
                        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" htmlFor="name">Full Name</label>
                                    <input
                                        required
                                        name="name"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2a1b2b] text-gray-900 dark:text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                        id="name" placeholder="Enter your full name" type="text"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" htmlFor="phone">Phone No.</label>
                                    <input
                                        required
                                        name="phone"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2a1b2b] text-gray-900 dark:text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                        id="phone" placeholder="08012345678" type="tel"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" htmlFor="email">Email Address</label>
                                    <input
                                        required
                                        name="email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2a1b2b] text-gray-900 dark:text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                        id="email" placeholder="student@unilag.edu.ng" type="email"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" htmlFor="faculty">Faculty</label>
                                    <input
                                        required
                                        name="faculty"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2a1b2b] text-gray-900 dark:text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                        id="faculty" placeholder="Engineering" type="text"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" htmlFor="dept">Department</label>
                                    <select
                                        required
                                        name="dept"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2a1b2b] text-gray-900 dark:text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                        id="dept"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Select Department</option>
                                        <option value="Civil Engineering">Civil Engineering</option>
                                        <option value="Electrical Engineering">Electrical Engineering</option>
                                        <option value="Mechanical Engineering">Mechanical Engineering</option>
                                        <option value="Chemical Engineering">Chemical Engineering</option>
                                        <option value="Computer Engineering">Computer Engineering</option>
                                        <option value="Systems Engineering">Systems Engineering</option>
                                        <option value="Petroleum & Gas Engineering">Petroleum & Gas Engineering</option>
                                        <option value="Geomatics Engineering">Geomatics Engineering</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" htmlFor="level">Level</label>
                                    <select
                                        required
                                        name="level"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2a1b2b] text-gray-900 dark:text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                        id="level"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Select Level</option>
                                        <option value="100L">100L</option>
                                        <option value="200L">200L</option>
                                        <option value="300L">300L</option>
                                        <option value="400L">400L</option>
                                        <option value="500L">500L</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" htmlFor="session">Session</label>
                                    <input
                                        required
                                        name="session"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2a1b2b] text-gray-900 dark:text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                        id="session" placeholder="2023/2024" type="text"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" htmlFor="birthday">Birthday</label>
                                    <input
                                        required
                                        name="birthday"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2a1b2b] text-gray-900 dark:text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                        id="birthday" type="date"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" htmlFor="comment">Comment</label>
                                    <textarea
                                        name="comment"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2a1b2b] text-gray-900 dark:text-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none h-32"
                                        id="comment" placeholder="Tell us about yourself or ask a question..."
                                    />
                                </div>
                            </div>

                            <button
                                disabled={isSubmitting}
                                className="mt-2 w-full py-4 bg-accent text-white text-lg font-bold rounded-xl hover:bg-[#a02eac] transition-all transform hover:scale-[1.02] shadow-lg cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                type="submit"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="animate-spin" />
                                        <span>Submitting...</span>
                                    </>
                                ) : (
                                    "Register Now"
                                )}
                            </button>
                            <p className="text-xs text-center text-gray-500 mt-2">By registering, you agree to our <a href="https://drive.google.com/file/d/1ew5PVG5nIJmQfb597X9zTyx4-F-EJoD5/view?usp=drivesdk" className="text-accent hover:underline" target="_blank">Terms of Service</a>.</p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
