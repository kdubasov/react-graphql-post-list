import React, {useState} from 'react';
import "./AddComment.scss";
import {Badge, Button, Form, FormControl} from "react-bootstrap";
import {useMutation} from "@apollo/client";
import {ADD_COMMENT, ALL_COMMENTS} from "../../apollo/queries.js";

const AddComment = ({postId}) => {

    const [ createComment ] = useMutation(ADD_COMMENT,{
        refetchQueries: [//для обновления списка постов после добавления (делается еще запрос)
            {query: ALL_COMMENTS}
        ],
        //если просто обновлять кеш то через update (27:45)
        // https://www.youtube.com/watch?v=vlDhgLk5m84&t=733s&ab_channel=%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%D0%9D%D0%B5%D0%BF%D0%BE%D0%BC%D0%BD%D1%8F%D1%89%D0%B8%D0%B9
    });

    const date = new Date(Date.now()).toLocaleDateString();
    const [text, setText] = useState("");

    const handleAdd = e => {
        e.preventDefault();

        createComment({variables : {
            post_id: postId, date: date, body: text,
        }}).then(() => setText(""))
    }

    return (
        <div className={"AddComment"}>
            <Badge>Добавить комментарий</Badge>
            <Form onSubmit={handleAdd}>
                <FormControl
                    placeholder={"Enter text"}
                    size={"sm"}
                    required
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <Button type={"submit"} size={"sm"}>
                    Добавить
                </Button>
            </Form>
        </div>
    );
};

export default AddComment;
