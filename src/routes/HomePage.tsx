import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { DynamicImage } from "../components/DynamicImage";


export const HomePage: React.FC = () => (
    <Container>
        <h1>Главная</h1>
        <Row>
            <Col xs={6} md={4}>
                <DynamicImage />
            </Col>
        </Row>
    </Container>
)