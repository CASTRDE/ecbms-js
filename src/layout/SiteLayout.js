import { Layout } from "antd";
import React from "react";
import { Content, Header } from "antd/lib/layout/layout";


function SiteLayout() {

 return (
    <>
        <Layout>
        <Header className="header" >
            <p>ECBMS | Electronic Customs Brokerage Management System</p>
        </Header>
        <Content>
            <p>Sample</p>
        </Content>
        </Layout>
    </>
 );
}

export default SiteLayout;