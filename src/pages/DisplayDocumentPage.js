import React from "react";
import {Card, Row, Col, Form, Input, Button} from 'antd';
import "./DisplayDocumentPage.css";

function DisplayDocumentPage() {

    return (
        <div className="search-entry-bg">
            <div className="display-document-main-container">
                <Card className="document-card" title="Document">
                    <div className="display">
                        <Row>
                            <Col span={12}>
                                <Form.Item
                                    className="entry-form-no-label"
                                    label="Entry Form No.:"
                                >
                                    <Input className="input"/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item>
                                    <div className="button-container">
                                        <div className="reset">
                                            <Button>
                                                Reset
                                            </Button>
                                        </div>
                                        <div className="submit">
                                            <Button type="primary" htmlType="submit">
                                                Submit
                                            </Button>
                                        </div>
                                    </div>
                                </Form.Item>
                            </Col>
                        </Row>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default DisplayDocumentPage;