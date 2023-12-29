import getPosts from "@/lib/posts/getPosts";
import sortPosts from "@/lib/posts/sortPosts";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function PostsList() {
    const posts = sortPosts(getPosts());

    return (<>
        <div className="flex flex-row flex-wrap gap-4">
            {posts.map((post) => {
                if (post.visible) {
                    return (
                        <Link key={post.slug} className="p-4 rounded-lg w-96"
                            href={`/${new Date(post.published).getFullYear()}/${post.slug}`}>
                            <div>
                                <div className="h-48 relative mb-4">
                                    <Image src={post.image} alt={post.title} fill className="rounded-md object-cover shadow-md" />
                                </div>
                                <h2 className="font-display font-bold text-2xl truncate h-8">{post.title}</h2>
                                <p>{post.published}</p>
                            </div>
                        </Link>

                    )
                }
            })}
        </div>
    </>);
}

export default PostsList;