import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  projects,
  getProjectBySlug,
} from "@/lib/data/projects";
import { ProjectDetail } from "./project-detail";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return {
      title: "Project not found",
    };
  }

  const description = project.tagline;

  return {
    title: project.title,
    description,
    openGraph: {
      title: `${project.title} · Sakshi Srivastava`,
      description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} · Sakshi Srivastava`,
      description,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }
  return <ProjectDetail project={project} />;
}
