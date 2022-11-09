import { Form, Input, Button } from 'antd';
import React, { useState } from 'react';
import "./CreatePasswordPage.css";

function CreatePasswordPage() {
    const[newPW, setNewPW] = useState('');
    const[conPW, setConPW] = useState('');
    const REQUIRED_ERROR_MESSAGE = '';
    const[message, setMessage] = useState('');
    const validPW = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*)(?=.*[@$!%*?&])[A-Za-z@$!%*?&]{12,}$');

    const validatePW = () => {
        if(newPW==null){
            setMessage('Invalid format');
        }
        else if(!newPW===conPW){
            setMessage('Passwords does not match');
        }
        else if(!validPW.test(newPW)){
            setMessage('Invalid format');
        }
        else{
            setMessage('Valid');
        }
    }

    const handleNewPW = event =>{
        setNewPW(event.target.value);
    }

    const handleConPW = event =>{
        setConPW(event.target.value);
    }

    return(
        <>
        <div className="form-container">
            <Form
                layout='vertical'>
                <p className='form-header'>Create New Password</p>
                <Form.Item
                    name="new-password"
                    label="New Password"
                    rules={[
                        { required: true, message: REQUIRED_ERROR_MESSAGE },
                       {
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/,
                        message: ''
                       }
                      ]}
                    style={
                        {   
                            width: 386,
                            marginBottom: 30
                        }
                    }
                    onChange={handleNewPW}
                 >
                    <Input.Password
                            value={newPW}
                            onChange={validatePW}
                            ></Input.Password>
                </Form.Item>
                <Form.Item
                    name="confirm-password"
                    label="Confirm Password"
                    dependencies={['new-password']}
                    rules={[
                        { required: true, message: REQUIRED_ERROR_MESSAGE },
                       {
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/,
                        message: 'Invalid format'
                       },
                       ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('new-password') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                      }),
                      ]}
                    style={
                        {   
                            width: 386,
                            marginBottom: 30
                        }
                    }
                    onChange={handleConPW}
                >
                    <Input.Password 
                            value={conPW}
                            onChange={validatePW}
                            ></Input.Password>
                </Form.Item>
                <p>
                    Alert: {message}
                </p>
                <Form.Item className='save-btn'>
                    <Button type="primary"
                        style={
                            {   width: 69,
                                height: 40,
                                marginTop: 20}
                        }
                        // onClick={onFinish}
                    >Save</Button>
                </Form.Item>
            </Form>
        </div>
        </>
    );
}

export default CreatePasswordPage;