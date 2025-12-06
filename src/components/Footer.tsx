export default function Footer() {
    return (
        <footer className="w-full py-8 mt-12 border-t border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center text-center">
                <p className="text-sm text-gray-500 font-light">
                    &copy; {new Date().getFullYear()} Sophie Huang | UX Designer. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
