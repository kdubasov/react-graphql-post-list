import {gql} from "@apollo/client";

export const ALL_POSTS = gql`
    query AllPosts {
        allPosts {
            id
            title
            views
            user_id
        }
    }
`;

export const ADD_POST = gql`
    mutation AddPost($title:String!, $user_id:ID!, $views:Int!){
        createPost(title: $title, views: $views, user_id: $user_id) {
            user_id,
            title,
            views
        }
    }
`;

export const UPDATE_POST = gql`
    mutation UpdatePost($title:String!, $user_id:ID!, $views:Int!, $id: ID!,){
        updatePost(id: $id, title: $title, views: $views, user_id: $user_id) {
            id,
            title,
            views,
            user_id
        }
    }
`;

export const REMOVE_POST = gql`
    mutation RemovePost($id: ID!,){
        removePost(id: $id,) {
            id,
        }
    }
`;


// comments
export const ALL_COMMENTS = gql`
    query AllComments {
        allComments {
            id
            post_id
            body
            date
        }
    }
`;