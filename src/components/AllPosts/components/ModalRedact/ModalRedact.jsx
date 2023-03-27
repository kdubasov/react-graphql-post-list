import React, {useState} from 'react';
import {Button, Form, FormControl, Modal} from "react-bootstrap";
import {useMutation} from "@apollo/client";
import {ALL_POSTS, UPDATE_POST} from "../../../../apollo/queries.js";

const ModalRedact = ({show,handleClose,data}) => {

    const [ updatePost ] = useMutation(UPDATE_POST,{
        refetchQueries: [//для обновления списка постов после добавления (делается еще запрос)
            {query: ALL_POSTS}
        ],
        //если просто обновлять кеш то через update (27:45)
        // https://www.youtube.com/watch?v=vlDhgLk5m84&t=733s&ab_channel=%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%D0%9D%D0%B5%D0%BF%D0%BE%D0%BC%D0%BD%D1%8F%D1%89%D0%B8%D0%B9
    });

    const [nowData, setNowData] = useState(data);
    const handleChange = value => {
        setNowData({...nowData,...value});
    }

    const handleUpdate = e => {
        e.preventDefault();
        updatePost({variables: nowData})
            .finally(handleClose)
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Изменить статью</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={handleUpdate}>

                    <FormControl
                        value={nowData.title}
                        onChange={e => handleChange({title: e.target.value})}
                    />

                    <FormControl
                        type={"number"}
                        value={nowData.views}
                        onChange={e => handleChange({views: Number(e.target.value)})}
                    />

                    <Button size={"sm"} variant="primary" type={"submit"}>
                        Сохранить
                    </Button>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button size={"sm"} variant="secondary" onClick={handleClose}>
                    Закрыть
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalRedact;
