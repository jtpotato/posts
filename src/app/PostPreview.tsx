"use client"

import Image from "next/image";
import Link from "next/link";
import { CSSProperties, useEffect, useState } from "react";
import "./PostPreview.css";
import LinkTransition from "../lib/transitions/LinkTransition";

function PostPreview({ post, index }: { post: Post, index: number }) {
  return (
    <LinkTransition
      key={post.slug}
      className="p-4 rounded-lg w-96 post-preview-appear"
      href={`/${new Date(post.published).getFullYear()}/${post.slug}`}
      style={{ "--animation-delay": `${index}s` } as CSSProperties}
    >
      <div>
        <div className="h-48 relative mb-4 overflow-hidden">
          <Image src={post.image} alt={post.title} fill className="rounded-md object-cover shadow-md" />
        </div>
        <h2 className="font-display font-bold text-2xl truncate h-8">{post.title}</h2>
        <p>{post.published}</p>
      </div>
    </LinkTransition>
  );
}

export default PostPreview;