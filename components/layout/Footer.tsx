export default function Footer() {
    return (
        <footer className="relative bg-[#030014] py-8 overflow-hidden">
            {/* Gradient Divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/40 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <p className="text-neutral-500 text-sm font-poppins text-center">
                    © {new Date().getFullYear()} Stiven Arifaj. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
