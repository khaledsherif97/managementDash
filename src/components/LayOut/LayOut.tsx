import { Outlet } from "react-router-dom"
import SideNav from "../SideNav/SideNav"
import NavBar from "../NavBar/NavBar"
import { Col, Row } from "antd"



const LayOut = () => {
  return (
   <>
    
   <Row>
   <Col span={4}>
   <SideNav/>
  </Col>
  <Col span={20}>
  <NavBar/>
   <Outlet/>
   </Col>
   </Row>
   </>
  )
}

export default LayOut