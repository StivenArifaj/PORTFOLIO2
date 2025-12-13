import { Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-neutral-950 py-8 border-t border-white/5">
            <div className="container mx-auto px-4 text-center">
                <p className="text-neutral-500 text-sm flex items-center justify-center gap-1 font-poppins">
                    Designed & Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Stiven Arifaj
                </p>
                <p className="text-neutral-600 text-xs mt-2 font-poppins">
                    © 2024 All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}
