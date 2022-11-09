import React from 'react'
import {Button, Form, Input, Row, Col, Card, Radio,Dropdown, message, Space, Tooltip} from "antd";
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import "./NewLodgement.css"

function NewLodgement() {
    return (
        <div className="new-lodgement-bg">
            <Form>
                <div className="new-lodgement-main-container">
                <Card
                    title="New Lodgement"
                >
                    <Row>
                    <Radio>
                        <Col span={12}>
                            <Form.Item
                                className="lodgement-form-no-label"
                                label="Customer Name: "
                                placeholder="Please input"
                            >
                                <Button>
                                        <Space>
                                          Please Select
                                          <DownOutlined />
                                        </Space>
                                      </Button>

                            </Form.Item>
                        </Col>
                        </Radio>
                        <Col span={12}>
                            <Form.Item>
                                <div className="button-container">
                                    <div className="reset-button">
                                    <Button>
                                        Reset
                                    </Button>
                                    </div>
                                    <div className="submit-button">
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                    </div>
                                </div>
                            </Form.Item
                            >
                        </Col>
                    </Row>
                </Card>
                </div>
            </Form>
        </div>
    )
}

export default NewLodgement