import axios from "axios";
import { useQuery } from 'react-query';

const retrievePosts = async () => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response, 'response');
    return response.data;
}

export const DisplayPosts = () => {

    const {
        data: posts,
        error,
        isLoading,
    } = useQuery('posts', retrievePosts);

    if (isLoading) return <>Fetching Posts...</>;
    if (error) return <>An error occured...</>
    

    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    ) 
};