import { Col, Row } from "antd"
import DashTable from "../DashTable/DashTable"


const Dashboard = () => {
  return (
    <Row className=" mt-20">
      <Col span={18} className=" px-5  shadow-lg">
      <DashTable />
      </Col>
      <Col span={6} className=" text-center px-5  shadow-lg">
        <h2 className=" text-2xl">Live Ops Monitor</h2>
        <p>Your restaurant is operating normally, bravo!</p>
        <div className="border border-3 border-gray-300  my-2 py-5">
          <h2 className=" text-5xl">5</h2>
          <h3>Offline Outlets</h3>
        </div>
        <div className="border border-3 border-gray-300  my-2 py-5">
          <h2 className=" text-5xl">5</h2>
          <h3>Offline Outlets</h3>
        </div>

      </Col>
    
    </Row>
  )
}

export default Dashboard