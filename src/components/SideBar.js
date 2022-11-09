import {
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import {Layout, Menu} from 'antd';
import React, {useState} from 'react';
import Sider from "antd/es/layout/Sider";
import { useNavigate } from "react-router-dom"

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

function SideBar() {

    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()

    return (
        <Layout
            style = {{
                Height: '100%',
            }}
        >
            <div>
                <Sider
                    style={{
                        minHeight: '100vh',
                        backgroundColor: 'white',
                    }}
                    trigger={null} collapsible collapsed={collapsed}
                >
                    <Menu
                        onClick={({key}) => {
                            if(key === ''){
                                console.error("testingroute")
                            } else {
                                navigate(key)
                            }
                        }}
                        defaultSelectedKeys={['1']}
                        mode="inline"
                        items={
                            [
                                getItem('New Lodgement', '/NewLodgement', <PieChartOutlined/>),
                                getItem('Search Entry', '/SearchEntry', <DesktopOutlined/>),
                                getItem('Documents', '/Documents', <ContainerOutlined/>),
                                getItem('Common Data Settings', '/CommonDataSettings', <MailOutlined/>, [
                                    getItem('SLEEPWELL', '5'),
                                ]),
                            ]
                        }
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
            </div>
        </Layout>
    );
};

export default SideBar