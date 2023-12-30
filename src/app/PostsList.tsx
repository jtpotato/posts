import getPosts from "@/lib/posts/getPosts";
import sortPosts from "@/lib/posts/sortPosts";
import PostPreview from "./PostPreview";
import PostListBackground from "./PostListBackground";

function PostsList() {
    const posts = sortPosts(getPosts());

    return (<>
        <div className={"flex flex-row flex-wrap gap-[1px] p-[1px] relative"}>
            {posts.map((post, index) => {
                if (post.visible) {
                    return (
                        <PostPreview post={post} index={index} key={post.slug} />
                    )
                }
            })}
            <PostListBackground />
        </div>
    </>);
}

export default PostsList;