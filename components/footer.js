

export default function Footer() {

    return (
        <footer className="bg-charcoal-gray text-white py-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between">
                    <div>
                        <p className="text-lg font-semibold">Artiscape</p>
                        <p className="mt-2 text-sm">A portfolio website for creative professionals</p>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">Contact Us</p>
                        <p className="mt-2 text-sm">info@artiscape.com</p>
                    </div>
                </div>
                <div className="mt-8 border-t border-charcoal-gray pt-6">
                    <p className="text-sm text-white/70">&copy; 2024 Artiscape. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}  