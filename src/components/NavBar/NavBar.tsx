
import { BellOutlined, DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Dropdown, Layout, MenuProps, Row, Space, Switch, message } from 'antd';
import { Header } from 'antd/es/layout/layout';


const NavBar = () => {
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };
  const items: MenuProps['items'] = [
    {
      label: 'English',
      key: '1',
    },
    {
      label: 'Arabic',
      key: '2',
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
//shwitsh
  const onchange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <Layout
    style={{
      position:"fixed",
      top:"0",
      width:"80%",
      zIndex:"99999",
     
     }}
    >
    <Header className='  bg-white border-b border-gray-300' style={{ padding: 0,  }}>
      <Row>
        <Col span={16} className=' text-xl pt-2 font-bold'> <h2 className='ps-4 '>Tittel</h2></Col>
        <Col span={8}>
          <Space wrap>
            <Dropdown menu={menuProps}>
              <Button>
                <Space>
                  Languages
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>

          </Space>
          
          <BellOutlined className='px-5' />
          <UserOutlined className='pe-5' />
          <Switch defaultChecked onChange={onchange} />
        </Col>

      </Row>
    </Header>
   

  </Layout>
  )
}

export default NavBar