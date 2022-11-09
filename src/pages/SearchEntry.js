import React from 'react'
import {Button, Form, Input, Row, Col, Card} from "antd";
import "./SearchEntry.css"

function SearchEntry() {
    return (
        <div className="search-entry-bg">
            <Form>
                <Card
                    title="Search Entry"
                >
                    <Row>
                        <Col span={12}>
                            <Form.Item
                                className="entry-form-no-label"
                                label="Entry Form No.: "
                                placeholder="Please input"
                            >
                                <Input
                                    className="search-entry-input"
                                    placeholder="Please input"
                                />
                            </Form.Item>
                        </Col>
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
            </Form>
        </div>
    )
}

export default SearchEntry