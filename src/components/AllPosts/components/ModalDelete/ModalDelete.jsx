import React from 'react';
import {Button, Modal} from "react-bootstrap";
import {useMutation} from "@apollo/client";
import {ALL_POSTS, REMOVE_POST} from "../../../../apollo/queries.js";

const ModalDelete = ({show,handleClose,data}) => {

    const [ removePost ] = useMutation(REMOVE_POST,{
        refetchQueries: [//для обновления списка постов после добавления (делается еще запрос)
            {query: ALL_POSTS}
        ],
        //если просто обновлять кеш то через update (27:45)
        // https://www.youtube.com/watch?v=vlDhgLk5m84&t=733s&ab_channel=%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%D0%9D%D0%B5%D0%BF%D0%BE%D0%BC%D0%BD%D1%8F%D1%89%D0%B8%D0%B9
    });

    const handleDelete = e => {
        e.preventDefault()
        removePost({variables: {id: data.id}})
            .finally(handleClose)
    }

    return (
        <Modal className={"ModalDelete"} show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Подтверждение</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Вы уверены что хотите удалить <b>"{data.title}"</b> ?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Отмена
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                    Удалить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalDelete;
