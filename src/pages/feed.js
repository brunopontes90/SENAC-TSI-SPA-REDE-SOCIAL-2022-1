import React from "react";
import Post from "../components/feed/Post";
import Layout from "../components/shared/layouts";
import { getPost } from '../data';

export default function FeedPage() {
    
    const posts = [getPost(), getPost(), getPost()];
    return (
        <Layout>
            <div className="row">
                <div className="col-10 mx-auto">
                    { posts.map( (post) => <Post key={post.id} post={post} />) }
                </div>
            </div>
        </Layout>
    )
}