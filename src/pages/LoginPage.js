import { Col, Row } from "antd";
import React from 'react';
import "./LoginPage.css";

function LoginPage() {

    return (
        <>
        <div className="login-page-bg-container" />
        <div className="foreground">
            <Row>
                <Col className="foreground-logo" span={12}>logo</Col>
                <Col className="foreground-login"span={12}>login</Col>
            </Row>
        </div>
        
        </>
     );
}

export default LoginPage;