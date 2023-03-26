import React, {useState} from 'react';
import {Alert, Button} from "react-bootstrap";
import "./PostItem.scss";
import ModalDelete from "../ModalDelete/ModalDelete.jsx";

const PostItem = ({data}) => {

    const [deleteModal, setDeleteModal] = useState(false);

    return (
        <Alert variant={"secondary"} className={"PostItem p-2 small"}>
            {data.title} <br/>
            Просмотры: <b>{data.views}</b>

            <div className="btns-container">
                <Button size={"sm"} variant={"secondary"}>
                    Изменить
                </Button>

                <Button onClick={() => setDeleteModal(true)} size={"sm"} variant={"danger"}>
                    Удалить
                </Button>
            </div>

            <ModalDelete
                handleClose={() => setDeleteModal(false)}
                show={deleteModal}
                data={data}
            />
        </Alert>
    );
};

export default PostItem;
