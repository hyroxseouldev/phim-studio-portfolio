// project preview 데이터 가져오는 groq쿼리
export const projectPreviewQuery = `*[_type == "project"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  subGifImage,
  publishedAt,
  author->{
    name,
    image
  },
  categories[]->{
    title,
    slug
  }
}`;

// author data 가져오는 groq 쿼리
export const authorQuery = `*[_type == "author"] {
  _id,
  name,
  slug,
  image,
  bio,
  instagramLink,
  naverBlogLink
}`;

// project id로 디테일한 데이터 가져오는 groq 쿼리
export const projectDetailQuery = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage,
  subGifImage,
  projectImages,
  body,
  publishedAt,
  author->{
    name,
    slug,
    image,
    bio
  },
  categories[]->{
    title,
    slug,
    description
  }
}`;

// works 데이터 가져오는 groq 쿼리
export const worksQuery = `*[_type == "works"] | order(title asc) {
  _id,
  title,
  slug,
  description,
  image
}`;
