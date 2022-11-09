import { Col, Row, Form, Input, Button} from "antd";
import { ExclamationCircleFilled } from '@ant-design/icons';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import "./LoginPage.css";
import { useDispatch } from "react-redux";
import {userData} from "../slicers/loginSlicer";
import {login} from "../api/loginAPI";

function LoginPage() {
    const redirect = useNavigate();
    const dispatch = useDispatch();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[message, setMessage] = useState('');
    const[flag, isFlag] = useState('');

    //TEMP
    const redirectSideMenu = () => {
        if(email === '' || password === ''){
            setMessage('Please input log-in credentials')
            isFlag(<ExclamationCircleFilled color="#000000"/>)
        }
        else if(!email.toLowerCase().includes('@oocl.com') || email.length>16){
            setMessage('Credentials are incorrect')
            isFlag(<ExclamationCircleFilled color="#000000"/>)
        }
        else {
            login(2).then((res) => {
                dispatch(userData(res.data))
                if (res.data !== null) {
                    redirect(`/menu/new-lodgement`)
                } else {
                    setMessage('Credentials are incorrect')
                    isFlag(<ExclamationCircleFilled color="#000000"/>)
                }
            });
        }
        redirect(`/menu/new-lodgement`)
    }

    const onFinish = () => {
        
        if(email === '' || password === ''){
            setMessage('Please input log-in credentials')
            isFlag(<ExclamationCircleFilled color="#000000"/>)
        }
        else if(!email.toLowerCase().includes('@oocl.com') || email.length>16){
            setMessage('Credentials are incorrect')
            isFlag(<ExclamationCircleFilled color="#000000"/>)
        }
        else{
            redirectSideMenu();
        }

    }

    const handleEmailChange = event =>{
        setEmail(event.target.value);
    }

    const handlePWChange = event => {
        setPassword(event.target.value);
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
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: ''
                                    }
                                ]}
                            >
                                <Input.Password placeholder="Password"
                                        value={password}
                                        onChange={handlePWChange}></Input.Password>
                            </Form.Item>
                            <Form.Item className="alert-container">
                                <p className="alert-icon">{flag}</p>
                                <p className="alert-message">{message}</p>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary"
                                    style={
                                        {   width: 300,
                                            height: 40}
                                    }
                                    // onClick={onFinish}>
                                    //TEMP
                                    onClick={() => onFinish()}>
                                    Sign In
                                </Button>
                            </Form.Item>
                            <Form.Item>
                                <Link to ={`/reset`}>
                                    <Button type="link">Forgot your password?</Button>
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

export default LoginPage;