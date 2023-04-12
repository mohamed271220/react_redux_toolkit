import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
    /**useSelector is a hook provided by React-Redux that allows you to access the Redux store’s state within a functional component. It is an alternative to the connect() higher-order component and is used to retrieve a specific part of the state from the Redux store 1. You can think of it as the equivalent of mapStateToProps */
    const posts = useSelector(selectAllPosts)

    /*In this code snippet, useSelector is being used to retrieve the value of selectAllPosts from the Redux store and assign it to the posts variable. Then, a new variable orderedPosts is created by making a shallow copy of the posts array using the slice() method and sorting it in descending order by date using the sort() method and the localeCompare() method. This results in an array of posts sorted from newest to oldest by date*/
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    ))

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}
export default PostsList