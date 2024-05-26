import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import { VendorRequest, data } from "./vendor.data";
import {
  Image,
  Typography,
  message,
  Row,
  Col,
  Card,
  Button,
  Breadcrumb,
} from "antd";

const VendorDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [vendor, setVendor] = useState<VendorRequest>({
    id: 0,
    BusinessName: "",
    BusinessNameLocalized: "",
    BusinessType: "",
    BusinessLandline: "",
    SentAt: "",
    Cover: "",
    Logo: "",
    Email: "",
    TaxCard: "",
    ValueAddedCard: "",
    License: "",
    PropertyContract: "",
    PerformancePermission: "",
    RequestStatus: "Pending",
  });
  const getVendorDetails = () => {
    const vendor = data.find((vendor) => vendor.id === Number(id));
    if (vendor) {
      setVendor(vendor);
    } else {
      message.error("Vendor not found");
    }
  };
  useEffect(() => {
    getVendorDetails();
  });

  return (
    <div>
      <DashboardLayout title="test">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/home">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Vendor Profile</Breadcrumb.Item>
        </Breadcrumb>
        <Row
          className="
         justify-between
        "
        >
          <Col lg={20}>
            <Typography.Title level={3}>Vendor Profile</Typography.Title>
          </Col>
          <Col lg={4}>
            <Row gutter={16}>
              <Col>
                <Button>
                  {vendor.RequestStatus === "Approved" ? "Approved" : "Approve"}
                </Button>
              </Col>
              <Col>
                <Button danger>
                  {vendor.RequestStatus === "Rejected" ? "Rejected" : "Reject"}
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <section className="h-[40vh]">
          <section
            style={{
              backgroundImage: `url(${vendor.Cover})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              height: "70%",
              borderRadius: "10px",
            }}
          >
            <div className="imgWrapper z-10 absolute top-[73%] left-[2%]">
              <Row gutter={16} className="place-items-center">
                <Col>
                  <Image
                    src={vendor.Logo}
                    style={{
                      width: "130px",
                      height: "130px",
                      borderRadius: "50%",
                      border: "5px solid #fff",
                    }}
                  />
                </Col>
                <Col className="pt-7">
                  <Typography.Title level={3}>
                    {vendor.BusinessName} - {vendor.BusinessNameLocalized}
                  </Typography.Title>
                </Col>
              </Row>
            </div>
          </section>
        </section>

        <section className="mt-10">
          <Card title="Account Details">
            <Row gutter={16}>
              <Col span={8}>
                <Typography.Text strong>Email: </Typography.Text>
                <Typography.Text>{vendor.Email}</Typography.Text>
              </Col>
              <Col span={8}>
                <Typography.Text strong>Phone Number: </Typography.Text>
                <Typography.Text>{vendor.BusinessLandline}</Typography.Text>
              </Col>
            </Row>
          </Card>
        </section>
        <section className="mt-10">
          <Card title="Business Identification">
            <Row gutter={16}>
              <Col span={8}>
                <Typography.Text strong>Business Name: </Typography.Text>
                <Typography.Text>{vendor.BusinessName}</Typography.Text>
              </Col>
              <Col span={8}>
                <Typography.Text strong>
                  Business Name Localized:{" "}
                </Typography.Text>
                <Typography.Text>
                  {vendor.BusinessNameLocalized}
                </Typography.Text>
              </Col>
              <Col span={8}>
                <Typography.Text strong>Business Type: </Typography.Text>
                <Typography.Text>{vendor.BusinessType}</Typography.Text>
              </Col>
            </Row>
          </Card>
        </section>
      </DashboardLayout>
    </div>
  );
};

export default VendorDetails;
