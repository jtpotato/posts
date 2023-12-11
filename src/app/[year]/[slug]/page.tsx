import getPostFromYearAndSlug from "@/lib/posts/getPostFromYearAndSlug";
import { MDXRemote } from "next-mdx-remote/rsc";
import components from "./PostComponents";
import { notFound } from "next/navigation";
import Link from "next/link";
import { GoChevronLeft } from "react-icons/go";
import BobaLink from "@/boba-ui/link/BobaLink";

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

            <div className="p-8 font-body text-sm bg-background-dark text-text-dark">
                <p className="mb-4">No way! You finished reading. If you think the piece above was worth your time (not all of them are), maybe consider supporting me :D</p>
                <Link href="https://www.buymeacoffee.com/jtpotato" target="_blank">
                    <BobaLink>Buy Me A Coffee</BobaLink>
                </Link>
            </div>
        </div>

    </>)
}

export default BlogPost;