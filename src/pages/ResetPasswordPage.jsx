import { Col, Form, Row, Input, Button } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./ResetPasswordPage.css";

function ResetPasswordPage() {
    const notice = "Enter your E-mail address and we will send you password recovery instructions."
    const[email, setEmail] = useState('');

    const handleEmailChange = event =>{
        setEmail(event.target.value);
    }

    return (
        <>
        <div className="login-page-bg-container" />
        <div className="foreground">
            <Row>
                <Col className="foreground-logo" span={12} />
                <Col className="foreground-login"span={12}>
                    <Row className="login-logo" />
                    <Row className="form-container">
                        <Form>
                            <p className="notice-container">{notice}</p>
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: '',
                                        type: 'email'
                                    }
                                ]}
                                style={
                                    {   width: 300,
                                        height: 40}
                                }
                            >
                                <Input className="input-email"
                                        placeholder="E-mail Address"
                                        value={email}
                                        onChange={handleEmailChange}></Input>
                            </Form.Item>
                            <Form.Item className="submit-btn">
                                <Button type="primary"
                                    style={
                                        {   width: 300,
                                            height: 40}
                                    }
                                    // onClick={}
                                    >Submit</Button>
                            </Form.Item>
                            <Form.Item className="back-login">
                                <Link to ={`/login`}>
                                    <SearchOutlined />
                                    <Button type="link">Back to Login</Button>
                                </Link>
                            </Form.Item>
                        </Form>
                    </Row>
                </Col>
            </Row>
        </div>
        </>
    );
}

export default ResetPasswordPage;