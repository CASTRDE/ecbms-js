import { Form, Input, Button } from 'antd';
import React from 'react';
import "./CreatePasswordPage.css";

function CreatePasswordPage() {
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
                        {
                            required: true,
                            message: ''
                        }
                    ]}
                    style={
                        {   
                            width: 386,
                            marginBottom: 30
                        }
                    }                >
                    <Input.Password
                            // value={password}
                            // onChange={handlePWChange}
                            ></Input.Password>
                </Form.Item>
                <Form.Item
                    name="confirm-password"
                    label="Confirm Password"
                    rules={[
                        {
                            required: true,
                            message: ''
                        }
                    ]}
                    style={
                        {   
                            width: 386,
                            marginBottom: 30
                        }
                    } 
                >
                    <Input.Password 
                            // value={password}
                            // onChange={handlePWChange}
                            ></Input.Password>
                </Form.Item>
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