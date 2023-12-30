"use client"

import Image from "next/image";
import Link from "next/link";
import { CSSProperties, useEffect, useState } from "react";
import "./PostPreview.css";
import RandomGradient from "./RandomGradient";

function PostPreview({ post, index }: { post: Post, index: number }) {
  return (
    <Link
      className="p-4 w-96 post-preview-appear bg-white transition-transform duration-100"
      href={`/${new Date(post.published).getFullYear()}/${post.slug}`}
      style={{ "--animation-delay": `${index}s` } as CSSProperties}
    >
      <div>
        <div className="h-48 relative mb-4 overflow-hidden">
          {
            post.image ? <Image src={post.image} alt={post.title} fill className="rounded-md object-cover shadow-md" /> : <RandomGradient seed={post.title} />
          }
        </div>
        <h2 className="font-display font-bold text-2xl truncate h-8">{post.title}</h2>
        <p>{post.published}</p>
      </div>
    </Link>
  );
}

export default PostPreview;