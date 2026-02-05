

import { FaInstagram, FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-primary text-white py-12 px-6 lg:px-20 mt-auto">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="size-8 flex items-center justify-center">
                            <img src="/apwen-logo2.jpg" width="50" height="50" alt="APWEN UNILAG Logo" />
                        </div>
                        <h2 className="text-xl font-black">APWEN UNILAG</h2>
                    </div>
                    <p className="text-purple-200 max-w-md leading-relaxed">
                        Association of Professional Women Engineers of Nigeria, University of Lagos Chapter. Encouraging the girl child to be an engineer.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-purple-200">
                        <li><a className="hover:text-white transition-colors" href="#about">About Us</a></li>
                        <li><a className="hover:text-white transition-colors" href="#events">Past Events</a></li>
                        <li><a className="hover:text-white transition-colors" href="#leadership">Leadership</a></li>
                        <li><a className="hover:text-white transition-colors" href="#register">Join Membership</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-4">Contact</h3>
                    <ul className="space-y-2 text-purple-200">
                        <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">location_on</span> Faculty of Engineering, UNILAG
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">mail</span> apwenunilagchapter@gmail.com
                        </li>
                    </ul>
                    <div className="flex gap-4 mt-6">
                        <a className="size-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-accent transition-colors" href="https://instagram.com/apwenunilag" aria-label="Instagram">
                            <FaInstagram className="text-sm" />
                        </a>
                        <a className="size-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-accent transition-colors" href="https://api.whatsapp.com/send?phone=659" aria-label="WhatsApp">
                            <FaWhatsapp className="text-sm" />
                        </a>
                        <a className="size-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-accent transition-colors" href="https://www.linkedin.com/company/apwen-unilag-collegiate" aria-label="LinkedIn">
                            <FaLinkedin className="text-sm" />
                        </a>
                        <a className="size-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-accent transition-colors" href="mailto:apwenunilagchapter@gmail.com" aria-label="Email">
                            <FaEnvelope className="text-sm" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/20 mt-12 pt-8 text-center text-purple-300 text-sm">
                &copy; {new Date().getFullYear()} APWEN UNILAG. All rights reserved.
            </div>
        </footer>
    );
}
