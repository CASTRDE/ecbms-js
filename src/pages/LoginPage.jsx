// import { Col, Row, Button, Checkbox, Form, Input } from "antd";
import { Col, Row, Form, Input, Button, Alert} from "antd";
import React from 'react';
import "./LoginPage.css";

function LoginPage() {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
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
                        <Form
                            name="login-page"
                            className="login-form"
                            initialValues={{remember: true}}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: '',
                                        type: 'email'
                                    }
                                ]}>
                                <Input type="email"
                                        placeholder="E-mail Address"></Input>
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: '',
                                    }
                                ]}>
                                <Input placeholder="Password"
                                        type="password"></Input>
                            </Form.Item>
                            <Form.Item>
                                <Alert message="Alert message" type="warning" showIcon/>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary">Sign In</Button>
                            </Form.Item>
                        </Form>
                    </Row>
                </Col>
            </Row>
        </div>
        
        </>
     );
}

export default LoginPage;