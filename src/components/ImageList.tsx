import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { PictureState, actions } from "../store/ducks/pictures.duck";
import { Container, Col, Image, Row, Button } from "react-bootstrap";
import { format } from "date-fns";
import './imageList.css'


export const ImageList = () => {
    const pictures = useSelector<RootState, PictureState>(state => state.pictures);
    const dispatch = useDispatch()

    const handleDelete = useCallback((id) => dispatch(actions.delete(id)), [dispatch])
    return (
        <Container>
            {pictures.stack.map(pic => (
                <Row key={pic.id} className="mb-2">
                    <Col xs={8} md={4} className="border p-2">
                        <Image src={pic.url} fluid />
                        <Button
                            className="imagelist__delete"
                            onClick={() => handleDelete(pic.id)}
                            variant="danger"
                        >&times;</Button>
                    </Col>
                    <Col xs="4">
                        <h2>{pic.title || "Без названия"}</h2>
                        <p>{format(pic.load_date, "dd.MM.yyyy HH:ii:ss")}</p>
                    </Col>
                    <hr />
                </Row>
            ))}
        </Container>
    )
}