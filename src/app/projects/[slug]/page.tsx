import { getProject } from "@/actions/getProjects";
import React from "react";

const ProjectDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const project = await getProject(slug);
  return <div>{project.title}</div>;
};

export default ProjectDetailPage;
