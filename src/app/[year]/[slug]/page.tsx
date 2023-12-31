import getPostFromYearAndSlug from "@/lib/posts/getPostFromYearAndSlug";
import { MDXRemote } from "next-mdx-remote/rsc";
import components from "./PostComponents";
import { notFound } from "next/navigation";
import Link from "next/link";
import { GoChevronLeft } from "react-icons/go";
import BobaLink from "@/boba-ui/link/BobaLink";
import getPosts from "@/lib/posts/getPosts";
import { Metadata } from "next";
import styles from "./backbutton.module.css"

export async function generateStaticParams() {
    const posts = getPosts();

    return posts.map(post => ({ year: new Date(post.published).getFullYear().toString(), slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { year: string, slug: string } }) {
    const post = getPostFromYearAndSlug(params.year, params.slug);
    const metadata: Metadata = {
        metadataBase: new URL("https://jtpotato.github.io/posts"),
        title: post.title,
        description: post.content.slice(0, 50) + "...",
        openGraph: {
            title: post.title,
            description: post.content.slice(0, 50) + "...",
            images: [post.image],
            url: `https://jtpotato.github.io/posts/${params.year}/${params.slug}`,
            siteName: "jtpotato's Posts"
        },
    }

    return metadata
}

function BlogPost({ params }: { params: { year: string, slug: string } }) {
    const post = getPostFromYearAndSlug(params.year, params.slug);

    if (!post.visible) {
        return notFound();
    }

    return (<>
        <div>
            <div className="font-body text-lg p-4 max-w-3xl m-auto">
                <Link href="/" className={"flex flex-row items-center gap-1 my-8 ml-[-21.5px] " + styles.backbutton}>
                    <GoChevronLeft className={"stroke-1"} />
                    <p className="text-sm">Back to posts</p>
                </Link>
                <p className="text-sm">{post.published}</p>
                <h1 className="font-display font-bold text-4xl mb-4">{post.title}</h1>
                <p className="text-sm mb-4">Last Edit: {post.edited}</p>
                <MDXRemote source={post.content} components={components as any} />
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