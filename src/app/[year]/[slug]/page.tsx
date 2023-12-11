import getPostFromYearAndSlug from "@/lib/posts/getPostFromYearAndSlug";
import { MDXRemote } from "next-mdx-remote/rsc";
import components from "./PostComponents";
import { notFound } from "next/navigation";
import Link from "next/link";
import { GoChevronLeft } from "react-icons/go";

function BlogPost({ params }: { params: { year: string, slug: string } }) {
    const post = getPostFromYearAndSlug(params.year, params.slug);

    if (!post.visible) {
        return notFound();
    }

    return (<>
        <div>
            <div className="p-4">
            <Link href="/" className="flex flex-row items-center gap-1">
                <GoChevronLeft className={" stroke-1"} />
                <p>Back to posts</p>
            </Link>
            </div>

            <div className="font-body text-lg p-4 max-w-3xl m-auto">
                <h1 className="font-display font-bold text-4xl mb-4">{post.title}</h1>
                <MDXRemote source={post.content} components={components} />
            </div>
        </div>

    </>)
}

export default BlogPost;