import React from "react";
import { ImageList } from "../components/ImageList";
import { Container } from "react-bootstrap";


export const HistoryPage: React.FC = () => {
    return (
        <Container>
            <h1>История</h1>
            <ImageList />
        </Container>
    )
}