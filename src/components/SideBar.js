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
        { label: <Link to ="/newlodgement"> New Lodgement</Link>, key: "/newlodgement", icon: <FormOutlined /> },
        { label:  <Link to ="/searchentry"> Search Entry </Link>, key: "/searchentry", icon: <FileSearchOutlined /> },
        { label:  <Link to ="/documents"> Documents </Link>, key: "/documents", icon: <FileTextOutlined /> },
        { label: <Link to ="/commondatasettings"> Common Data Settings </Link> , key: "/commondatasettings", icon: <SettingOutlined /> },
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
                        defaultSelectedKeys={['1']}
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