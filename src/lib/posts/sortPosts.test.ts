// Mockup posts array

import { expect, test } from "bun:test";
import sortPosts from "./sortPosts";

const posts = [
  {
    title: "Post 3",
    slug: "post-3",
    published: "April 22 2022",
    edited: "April 22 2022",
    visible: true,
    content: "Post 3 content",
  },
  {
    title: "Post 1",
    slug: "post-1",
    published: "11 Dec 2023",
    edited: "11 Dec 2023",
    visible: true,
    content: "Post 1 content",
  },
  {
    title: "Post 2",
    slug: "post-2",
    published: "14 Nov 2023",
    edited: "14 Nov 2023",
    visible: true,
    content: "Post 2 content",
  },
];

const sortedPosts = [
  {
    title: "Post 1",
    slug: "post-1",
    published: "11 Dec 2023",
    edited: "11 Dec 2023",
    visible: true,
    content: "Post 1 content",
  },
  {
    title: "Post 2",
    slug: "post-2",
    published: "14 Nov 2023",
    edited: "14 Nov 2023",
    visible: true,
    content: "Post 2 content",
  },
  {
    title: "Post 3",
    slug: "post-3",
    published: "April 22 2022",
    edited: "April 22 2022",
    visible: true,
    content: "Post 3 content",
  },
];

test("Sorts posts by chronological order, recent to oldest", () => {
  expect(sortPosts(posts)).toEqual(sortedPosts);
});
