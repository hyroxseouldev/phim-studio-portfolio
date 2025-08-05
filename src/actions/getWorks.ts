"use server";

import { client } from "@/sanity/lib/client";

const WORKS_QUERY = `*[_type == "works"] {
  _id,
  title,
  description,
  image,
}`;

type WorkPreview = {
  _id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
};

export async function getWorks(): Promise<WorkPreview[]> {
  const works: WorkPreview[] = await client.fetch(WORKS_QUERY);
  return works;
}
