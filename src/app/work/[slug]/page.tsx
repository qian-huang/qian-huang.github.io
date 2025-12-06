import { projects } from "@/data/projects";
import EncryptedProject from "@/components/EncryptedProject";
import { notFound } from "next/navigation";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
                <header className="mb-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
                    <time className="text-gray-500 font-light">{project.date}</time>
                </header>

                <article>
                    <EncryptedProject encryptedContent={project.encryptedContent} />
                </article>
            </div>
        </div>
    );
}
