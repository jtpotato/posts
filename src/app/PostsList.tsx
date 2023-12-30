import getPosts from "@/lib/posts/getPosts";
import sortPosts from "@/lib/posts/sortPosts";
import PostPreview from "./PostPreview";
import PostListBackground from "./PostListBackground";

function PostsList() {
    const posts = sortPosts(getPosts());

    return (<>
        <div className={"grid p-4 grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 max-w-8xl m-auto"}>
            {posts.map((post, index) => {
                if (post.visible) {
                    return (
                        <PostPreview post={post} index={index} key={post.slug} />
                    )
                }
            })}
        </div>
    </>);
}

export default PostsList;