import React from 'react';
import {Container} from "react-bootstrap";
import AllPosts from "../components/AllPosts/AllPosts.jsx";
import AddPost from "../components/AddPost/AddPost.jsx";

const HomePage = () => {
    return (
        <Container className={"HomePage"}>
            <h3>Главная страница</h3>

            <AddPost />
            <AllPosts />
        </Container>
    );
};

export default HomePage;
