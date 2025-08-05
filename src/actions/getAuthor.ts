"use server";

import { client } from "@/sanity/lib/client";

const PHIM_NAME = "phim";

const AUTHOR_QUERY = `*[_type == "author" && name == $name][0] {
  _id,
  name,
  instagramLink,
  naverBlogLink,
  email,
  phone,
  location
}`;

type Author = {
  _id: string;
  name: string;
  instagramLink: string;
  naverBlogLink: string;
  email: string;
  phone: string;
  location: string;
};

export async function getAuthor(): Promise<Author> {
  const author: Author = await client.fetch(AUTHOR_QUERY, { name: PHIM_NAME });
  return author;
}
