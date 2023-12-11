import fs from "fs"
import matter from "gray-matter";
import path from "path";

function getPostFromYearAndSlug(year: string, slug: string) {
    const file = fs.readFileSync(`posts/${year}/${slug}.mdx`, "utf8");

    let postData = matter(file);

    let post: Post = {
      title: postData.data.title,
      slug: slug,
      image: postData.data.image,
      published: postData.data.published,
      edited: postData.data.edited,
      visible: postData.data.visible,
      content: postData.content,
    };

    return post;
}

export default getPostFromYearAndSlug;