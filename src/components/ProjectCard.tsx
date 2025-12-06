import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    imageSrc: string;
    href: string;
}

export default function ProjectCard({ title, imageSrc, href }: ProjectCardProps) {
    return (
        <Link href={href} className="group block relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white text-xl font-light opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        {title}
                    </span>
                </div>
            </div>
        </Link>
    );
}
