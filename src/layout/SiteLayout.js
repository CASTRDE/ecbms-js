import { Layout } from "antd";
import React from "react";
import { Content, Header } from "antd/lib/layout/layout";
import { Outlet } from "react-router-dom";
import "./SiteLayout.css";


function SiteLayout() {

 return (
    <>
        <Layout>
            <Header className="header">
                <p className="headerTitle" >ECBMS | Electronic Customs Brokerage Management System</p>
            </Header>
            <Content className="background-image-gradient">
                <Outlet />
            </Content>
        </Layout>
    </>
 );
}

export default SiteLayout;