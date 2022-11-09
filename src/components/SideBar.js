import {
    FileSearchOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    FileTextOutlined,
    FormOutlined,
    SettingOutlined
} from '@ant-design/icons';
import {Layout, Menu} from 'antd';
import React, {useState} from 'react';
import Sider from "antd/es/layout/Sider";
import {Link, Outlet } from 'react-router-dom'

function SideBar() {

    const [collapsed, setCollapsed] = useState(false);

    const items = [
        { label: <Link to ="/menu/newlodgement"> New Lodgement </Link>, key: "/menu/newlodgement", icon: <FormOutlined /> },
        { label:  <Link to ="/menu/searchentry"> Search Entry </Link>, key: "/menu/searchentry", icon: <FileSearchOutlined /> },
        { label:  <Link to ="/menu/documents"> Documents </Link>, key: "/menu/documents", icon: <FileTextOutlined /> },
        { label: <Link to ="/menu/commondatasettings"> Common Data Settings </Link> , key: "/menu/commondatasettings", icon: <SettingOutlined /> , children: [
                {label: "Container Size/Type"},
                {label: "Country"},
                {label: "Currency"},
                {label: "Customer"},
                {label: "Information"},
                {label: "HS Code"},
                {label: "Incoterms"},
                {label: "Location of Goods"},
                {label: "Office Clearance"},
                {label: "Port of Destination"},
            ]},
    ];


    return (
        <Layout
            style = {{
                Height: '100%',
            }}
        >
                <Sider
                    style={{
                        minHeight: '100%',
                        backgroundColor: 'white',
                    }}
                    trigger={null} collapsible collapsed={collapsed}
                >
                    <Menu
                        defaultSelectedKeys={['/menu/newlodgement']}
                        mode="inline"
                        items={items}
                    />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        position: "absolute",
                        bottom: 15,
                        zIndex: 1,
                        left: 20
                    }} >

                    <Layout>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })}
                    </Layout>
                    </div>
                </Sider>
            <Outlet/>
        </Layout>
    );
};

export default SideBar