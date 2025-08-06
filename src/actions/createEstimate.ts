"use server";

import { client } from "@/sanity/lib/client";

const ESTIMATE_QUERY = `*[_type == "estimate"] {
  _id,
  name,
  phone,
  worksType,
  message,
}`;

type Estimate = {
  name: string;
  phone?: string;
  worksType: string;
  message: string;
};

export async function createEstimate(estimate: Estimate) {
  const newEstimate = await client.create({
    _type: "estimate",
    ...estimate,
  });
  return newEstimate;
}
