import { Form, Input, Button } from 'antd';
import React, {useState} from 'react';
import "./CreatePasswordPage.css";

function CreatePasswordPage() {
    // const FORMAT_ERROR_MESSAGE = 'Entries must be at least 12 characters long and must contain a mix of uppercase/lowercase, alphanumeric, or special characters';
    const FORMAT_ERROR_MESSAGE = 'Invalid';
    const PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
    const[message, setMessage] = useState('');
    const[error, setError] = useState('');
    const[newPW, setNewPW] = useState('');
    const[conPW, setConPW] = useState('');
    
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
                       { required: true, message: '' },
                       ({ getFieldValue }) => ({
                        validator() {
                          if (!PATTERN.test(getFieldValue('new-password'))) {
                            setMessage(FORMAT_ERROR_MESSAGE);
                            setError('error');
                            return Promise.reject(new Error(''));
                          }
                          else{
                            setMessage('Valid');
                            setError('');
                            return Promise.resolve();
                          }
                            },
                        }),
                      ]}
                    style={
                        {   
                            width: 386,
                            marginBottom: 30
                        }
                    }
                    onChange={(e) => setNewPW(e.target.value)}
                 >
                    <Input.Password status={error}
                            ></Input.Password>
                </Form.Item>
                <Form.Item
                    name="confirm-password"
                    label="Confirm Password"
                    dependencies={['new-password']}
                    rules={[
                        { required: true, message: '' },
                       {
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/,
                        message: ''
                       },
                       ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('new-password') === value) {
                            setError('');
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error('Entries must be the same'));
                        },
                      }),
                      ]}
                    style={
                        {   
                            width: 386,
                            marginBottom: 30
                        }
                    }
                    onChange={(e) => setConPW(e.target.value)}
                >
                    <Input.Password 
                            ></Input.Password>
                </Form.Item>
                <p>{message}</p>
                <Form.Item className='save-btn'
                >
                    <Button type="primary"
                        style={
                            {   width: 69,
                                height: 40,
                                marginTop: 20}
                        }
                        disabled={!(PATTERN.test(newPW)===PATTERN.test(conPW) && message !== 'Invalid')}
                        // onClick={onFinish}
                    >Save</Button>
                </Form.Item>
            </Form>
        </div>
        </>
    );
}

export default CreatePasswordPage;