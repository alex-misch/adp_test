
import React, { useCallback } from 'react';
import { useHistory } from "react-router-dom";
import { Nav } from 'react-bootstrap';

export const NavLine: React.FC = () => {
    const history = useHistory()
    const handleRouteChage = useCallback(href => history.push(href), [history])

    return (
        <Nav activeKey="/home" onSelect={handleRouteChage}>
            <Nav.Item>
                <Nav.Link eventKey="/">Главная</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/history">История</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}