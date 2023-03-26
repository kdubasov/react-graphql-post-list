import React, {useState} from 'react';
import {Alert, Button, Form, FormControl} from "react-bootstrap";
import "./AddPost.scss";
import {useMutation} from "@apollo/client";
import {ADD_POST, ALL_POSTS} from "../../apollo/queries.js";

const AddPost = () => {

    const [formData, setFormData] = useState({
        title: "",
        user_id: "",
        views: "",
    });
    const [ createPost, { error } ] = useMutation(ADD_POST,{
        refetchQueries: [//для обновления списка постов после добавления (делается еще запрос)
            {query: ALL_POSTS}
        ],
        //если просто обновлять кеш то через update (27:45)
        // https://www.youtube.com/watch?v=vlDhgLk5m84&t=733s&ab_channel=%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%D0%9D%D0%B5%D0%BF%D0%BE%D0%BC%D0%BD%D1%8F%D1%89%D0%B8%D0%B9
    });

    const handleChange = (value) => {
        setFormData({...formData, ...value})
    }

    const handleAdd = e => {
        e.preventDefault()
        createPost({variables: formData})
            .finally(setFormData({
                title: "",
                user_id: "",
                views: "",
            }))
    }

    return (
        <div className={"AddPost"}>

            {/*check error after send*/}
            {error && <Alert variant={"danger"} className={"p-2 small"}>{error.message}</Alert>}

            <Form onSubmit={handleAdd}>
                <FormControl
                    size={"sm"}
                    placeholder={"Текст"}
                    required
                    value={formData.title}
                    onChange={e => handleChange({title: e.target.value})}
                />

                <FormControl
                    size={"sm"}
                    placeholder={"Юзер айди"}
                    required
                    value={formData.user_id}
                    onChange={e => handleChange({user_id: e.target.value})}
                />

                <FormControl
                    size={"sm"}
                    placeholder={"Просмотры"}
                    type={"number"}
                    required
                    value={formData.views}
                    onChange={e => handleChange({views: Number(e.target.value)})}
                />

                <Button className={"w-100"} type={"submit"} size={"sm"}>
                    Отправить
                </Button>
            </Form>
        </div>
    );
};

export default AddPost;
