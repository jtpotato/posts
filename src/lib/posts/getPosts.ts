import { glob, globSync } from "glob";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

function getPosts() {
  const files = globSync(["posts/**/*.mdx", "posts/**/*.md"]);

  let posts: Post[] = [];

  files.forEach((fileName) => {
    let err,
      data = fs.readFileSync(fileName, "utf8");

    if (err) {
      // console.error(err);
      return;
    }
    let postData = matter(data);

    let post: Post = {
      title: postData.data.title,
      slug: path.parse(fileName).name,
      image: postData.data.image,
      published: postData.data.published,
      edited: postData.data.edited,
      visible: postData.data.visible,
      content: postData.content,
    };

    posts.push(post);
  });

  return posts;
}

export default getPosts;
