import React, {useState} from 'react';
import "./Comments.scss"
import {Alert, Badge, Button} from "react-bootstrap";

const Comments = ({data}) => {

    const [showAll, setShowAll] = useState(false);

    if (!data.length) return;

    return (
        <div className={"Comments"}>
            <Badge>Комментарии ({data.length})</Badge>

            {
                data
                    .slice(0, showAll ? data.length : 2)
                    .map(elem => (
                    <Alert className={"p-2 small"} key={elem.id}>
                        {elem.body} <br/>
                        <Badge bg={"secondary"}>{elem.date}</Badge>
                    </Alert>
                ))
            }

            {
                data.length > 2 &&
                <Button size={"sm"} onClick={() => setShowAll(!showAll)}>
                    { showAll ? "Скрыть" : "Показать все" }
                </Button>
            }
        </div>
    );
};

export default Comments;
