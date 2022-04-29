import { useQuery } from "@apollo/client";
import React from "react";
import { UserContext } from "../auth";
import Post from "../components/feed/Post";
import Layout from "../components/shared/layouts";
import { getPost } from '../data';
import { GET_POSTS } from "../graphql/post/query";

export default function FeedPage() {
    const { loading, error, data } = useQuery(GET_POSTS);
    const { currentUser } = React.useContext(UserContext);
    console.log(currentUser);
    return (
        <>
            {loading && <h1>carregando</h1>}
            {!loading &&
                <Layout>
                    <div className="row">
                        <div className="col-10 mx-auto">
                            {data.post.map((post) => <Post key={post.id} post={post} />)}
                        </div>
                    </div>
                </Layout>}
        </>
    )
}