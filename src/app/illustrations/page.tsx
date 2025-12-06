import Image from "next/image";

const illustrations = [
    "illustration-30.png", "illustration-29.png", "illustration-47.png",
    "illustration-38.png", "illustration-42.png", "illustration-41.png",
    "illustration-37.png", "illustration-39.png", "illustration-40.png",
    "illustration-63.png", "illustration-64.png", "illustration-69.png",
    "illustration-68.png", "illustration-67.png", "illustration-66.png",
    "illustration-65.png", "illustration-70.png", "illustration-71.png",
    "illustration-20.png", "illustration-21.png", "illustration-22.png",
    "illustration-27.png", "illustration-26.png", "illustration-25.png",
    "illustration-24.png", "illustration-23.png", "illustration-28.png",
    "illustration-43.png", "illustration-44.png", "illustration-45.png",
    "illustration-46.png", "illustration-89.png", "illustration-62.png",
    "illustration-61.png", "illustration-60.png", "illustration-59.png",
    "illustration-72.png", "illustration-73.png", "illustration-74.png",
    "illustration-75.png", "illustration-79.png", "illustration-88.png",
    "illustration-82.png", "illustration-81.png", "illustration-80.png",
    "illustration-02.png", "illustration-52.png", "illustration-50.png",
    "illustration-54.png", "illustration-55.png", "illustration-56.png",
    "illustration-57.png", "illustration-58.png", "illustration-90.png",
    "illustration-03.png", "illustration-04.png", "illustration-05.png",
    "illustration-07.png", "illustration-09.png", "illustration-12.png",
    "illustration-10.png", "illustration-77.png", "illustration-13.png"
];

export default function IllustrationsPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
                <header className="mb-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Illustrations</h1>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {illustrations.map((img, index) => (
                        <div key={index} className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
                            <Image
                                src={`/images/${img}`}
                                alt={`Illustration ${index + 1}`}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
