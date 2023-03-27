import React, {useState} from 'react';
import {Alert, Button} from "react-bootstrap";
import "./PostItem.scss";
import ModalDelete from "../ModalDelete/ModalDelete.jsx";
import ModalRedact from "../ModalRedact/ModalRedact.jsx";
import Comments from "../Comments/Comments.jsx";

const PostItem = ({data,comms}) => {

    //modals
    const [deleteModal, setDeleteModal] = useState(false);
    const [redactModal, setRedactModal] = useState(false);

    return (
        <Alert variant={"secondary"} className={"PostItem p-2 small"}>
            {data.title} <br/>
            Просмотры: <b>{data.views}</b>

            <div className="btns-container">
                <Button onClick={() => setRedactModal(true)} size={"sm"} variant={"secondary"}>
                    Изменить
                </Button>

                <Button onClick={() => setDeleteModal(true)} size={"sm"} variant={"danger"}>
                    Удалить
                </Button>
            </div>

            {/*comments*/}
            <Comments data={comms} />

            <ModalDelete
                handleClose={() => setDeleteModal(false)}
                show={deleteModal}
                data={data}
            />

            <ModalRedact
                handleClose={() => setRedactModal(false)}
                show={redactModal}
                data={data}
            />
        </Alert>
    );
};

export default PostItem;
