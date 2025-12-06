import Image from "next/image";

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
                <header className="mb-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Resume</h1>
                </header>

                <div className="flex justify-center">
                    <div className="relative w-full max-w-2xl">
                        <Image
                            src="/images/Resume@2x.png"
                            alt="Resume"
                            width={800}
                            height={1131} // Approximate aspect ratio, will be responsive
                            className="w-full h-auto shadow-lg rounded-lg"
                            priority
                        />
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <a
                        href="/images/Resume@2x.png"
                        download
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
}
