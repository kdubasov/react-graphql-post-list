import React from 'react';
import {useQuery} from "@apollo/client";
import {ALL_COMMENTS, ALL_POSTS} from "../../apollo/queries.js";
import {Alert, Badge, Spinner} from "react-bootstrap";
import PostItem from "./components/PostItem/PostItem.jsx";
import "./AllPosts.scss";

const AllPosts = () => {

    const { loading, error, data } = useQuery(ALL_POSTS);
    const { data:commData } = useQuery(ALL_COMMENTS);

    const getPostComms = postId => {
        if (!commData) return [];
        return commData.allComments.filter(elem => elem.post_id === postId)
    }

    if (error){
        return (
            <Alert className={"p-2 small"}>
                Ошибка при получении постов!
            </Alert>
        )
    }

    return (
        <div className={"AllPosts"}>
            <Badge>
                Все посты ({data?.allPosts && data.allPosts.length})
                {loading && <Spinner className={"mx-3"} variant={"light"} size={"sm"} />}
            </Badge>

            <div className="data-container">
                {
                    data?.allPosts &&
                    data.allPosts.map(elem => (
                        <PostItem key={elem.id} data={elem} comms={getPostComms(elem.id)} />
                    ))
                }
            </div>
        </div>
    );
};

export default AllPosts;
