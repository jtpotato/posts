import getPosts from "@/lib/posts/getPosts";
import sortPosts from "@/lib/posts/sortPosts";
import PostPreview from "./PostPreview";

function PostsList() {
    const posts = sortPosts(getPosts());

    return (<>
        <div className="flex flex-row flex-wrap gap-4">
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