import { useState } from 'react';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  RiseOutlined,
  DollarOutlined,
  SnippetsOutlined,
  ShoppingCartOutlined,
  StarOutlined,
  TagOutlined,
  BulbOutlined,
 

} from '@ant-design/icons';
import { Button, Col, Layout, Menu, Row, } from 'antd';

import { Link } from 'react-router-dom';
import Sider from 'antd/es/layout/Sider';
//const { Header, Sider, Content } = Layout;
const SideNav = () => {
  const [collapsed, setCollapsed] = useState(false);
  //const {
  //  token: { colorBgContainer, borderRadiusLG },
 // } = theme.useToken();

// navBar
 

  return (
    <Layout
    style={{
     position:"fixed",
     left:"0",
    
    }}
    >
      <Sider  className='border-e border-gray-300' trigger={null} collapsible collapsed={collapsed} >
        <div className="demo-logo-vertical" />
        <Row className=' bg-white border-b border-gray-300 '>
          <Col span={8}>
            <Link className={`pt-5 ps-2 logo flex gap-x-3 items-center w-9 ${collapsed && 'hidden'}`} to={'/dash'}>
              <img src="/assets/Icon.png" alt="logo"  className=' w-20' />
              <h1 className="text-[1.2rem] font-bold">LOGO</h1>
            </Link></Col>
          <Col span={8} offset={8}>
            <Button
              className=''
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
               // position:"absolute",
               // right:"0",
              }}
            /></Col>


        </Row>
        <Menu
          theme="light"
          mode="inline"
          style={{
            height:"100vh",
            paddingTop: "10px",
            
            
          }}
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '',
              icon: "",
              label: 'Monitor Your Business',
            },
            {
              key: '1',
              icon: <HomeOutlined />,
              label: 'Dashboard',
            },
            {
              key: '2',
              icon: <RiseOutlined />,
              label: 'Performance Board',

            },
            {
              key: '3',
              icon: <DollarOutlined />,
              label: 'Financial Reports',
            },
            {
              key: '4',
              icon: <SnippetsOutlined />,
              label: 'Periodic Reports',
            },
            {
              key: '5',
              icon: <ShoppingCartOutlined />,
              label: 'Orders',
            },
            {
              key: '',
              icon: "",
              label: 'Grow Your Business',
            },
            {
              key: '6',
              icon: <BulbOutlined />,
              label: 'Advertising',
            },
            {
              key: '7',
              icon: <TagOutlined />,
              label: 'Discount',
            },
            {
              key: '8',
              icon: <StarOutlined />,
              label: 'Reviews',
            },
          ]}
        />
      </Sider>
      
    </Layout>
  )
}

export default SideNav