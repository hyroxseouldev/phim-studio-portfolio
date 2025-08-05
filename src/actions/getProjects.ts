"use server";

import { client } from "@/sanity/lib/client";

const PROJECTS_QUERY = `*[_type == "project"] {
  _id,
  title,
  description,
  image,
  link,
}`;

type ProjectPreview = {
  _id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
};

export async function getProjects(): Promise<ProjectPreview[]> {
  const projects: ProjectPreview[] = await client.fetch(PROJECTS_QUERY);
  return projects;
}

const PROJECT_DETAIL_QUERY = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  description,
  image,
  link,
}`;

type Project = {
  _id: string;
  title: string;
  description: string;
  image: string;
  link: string;
};

export async function getProject(slug: string): Promise<Project> {
  const project: Project = await client.fetch(PROJECT_DETAIL_QUERY, { slug });
  return project;
}
