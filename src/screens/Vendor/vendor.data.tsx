import { Button, Col, Popconfirm, Row } from "antd";
import { ColumnConfig } from "../../components/Table/Table";
import { IoCloseSharp, IoCheckmark } from "react-icons/io5";

export interface VendorRequest {
  id: number;
  BusinessName: string;
  BusinessNameLocalized: string;
  BusinessType: string;
  BusinessLandline: string;
  SentAt: string;
  Cover: string;
  Logo: string;
  Email: string;
  TaxCard: string;
  ValueAddedCard: string;
  License: string;
  PropertyContract: string;
  PerformancePermission: string;
  RequestStatus: "Pending" | "Approved" | "Rejected";
}

export const data: VendorRequest[] = [
  {
    id: 1,
    BusinessName: "Business Name 1",
    BusinessNameLocalized: "الاسم التجاري",
    BusinessType: "Activity Agency",
    BusinessLandline: "123456789",
    SentAt: new Date().toISOString(),
    Cover: "https://via.placeholder.com/150",
    Logo: "https://via.placeholder.com/150",
    Email: "businessname@business.com",
    TaxCard: "/test.pdf",
    ValueAddedCard: "/test.pdf",
    License: "/test.pdf",
    PropertyContract: "/test.pdf",
    PerformancePermission: "/test.pdf",
    RequestStatus: "Pending",
  },
  {
    id: 2,
    BusinessName: "Business Name 2",
    BusinessNameLocalized: "الاسم التجاري",
    BusinessType: "Hotel",
    BusinessLandline: "123456789",
    SentAt: new Date().toISOString(),
    Cover: "https://via.placeholder.com/150",
    Logo: "https://via.placeholder.com/150",
    Email: "businessname@business.com",
    TaxCard: "/test.pdf",
    ValueAddedCard: "/test.pdf",
    License: "/test.pdf",
    PropertyContract: "/test.pdf",
    PerformancePermission: "/test.pdf",
    RequestStatus: "Pending",
  },
  {
    id: 3,
    BusinessName: "Business Name 3",
    BusinessNameLocalized: "الاسم التجاري",
    BusinessType: "Travel Agency",
    BusinessLandline: "123456789",
    SentAt: new Date().toISOString(),
    Cover: "https://via.placeholder.com/150",
    Logo: "https://via.placeholder.com/150",
    Email: "businessname@business.com",
    TaxCard: "/test.pdf",
    ValueAddedCard: "/test.pdf",
    License: "/test.pdf",
    PropertyContract: "/test.pdf",
    PerformancePermission: "/test.pdf",
    RequestStatus: "Pending",
  },
  {
    id: 4,
    BusinessName: "Business Name 4",
    BusinessNameLocalized: "الاسم التجاري",
    BusinessType: "Travel Agency",
    BusinessLandline: "123456789",
    SentAt: new Date().toISOString(),
    Cover: "https://via.placeholder.com/150",
    Logo: "https://via.placeholder.com/150",
    Email: "businessname@business.com",
    TaxCard: "/test.pdf",
    ValueAddedCard: "/test.pdf",
    License: "/test.pdf",
    PropertyContract: "/test.pdf",
    PerformancePermission: "/test.pdf",
    RequestStatus: "Pending",
  },
  {
    id: 5,
    BusinessName: "Business Name 5",
    BusinessNameLocalized: "الاسم التجاري",
    BusinessType: "Travel Agency",
    BusinessLandline: "123456789",
    SentAt: new Date().toISOString(),
    Cover: "https://via.placeholder.com/150",
    Logo: "https://via.placeholder.com/150",
    Email: "businessname@business.com",
    TaxCard: "/test.pdf",
    ValueAddedCard: "/test.pdf",
    License: "/test.pdf",
    PropertyContract: "/test.pdf",
    PerformancePermission: "/test.pdf",
    RequestStatus: "Pending",
  },
  {
    id: 6,
    BusinessName: "Business Name 6",
    BusinessNameLocalized: "الاسم التجاري",
    BusinessType: "Travel Agency",
    BusinessLandline: "123456789",
    SentAt: new Date().toISOString(),
    Cover: "https://via.placeholder.com/150",
    Logo: "https://via.placeholder.com/150",
    Email: "businessname@business.com",
    TaxCard: "/test.pdf",
    ValueAddedCard: "/test.pdf",
    License: "/test.pdf",
    PropertyContract: "/test.pdf",
    PerformancePermission: "/test.pdf",
    RequestStatus: "Pending",
  },
  {
    id: 7,
    BusinessName: "Business Name 7",
    BusinessNameLocalized: "الاسم التجاري",
    BusinessType: "Travel Agency",
    BusinessLandline: "123456789",
    SentAt: new Date().toISOString(),
    Cover: "https://via.placeholder.com/150",
    Logo: "https://via.placeholder.com/150",
    Email: "businessname@business.com",
    TaxCard: "/test.pdf",
    ValueAddedCard: "/test.pdf",
    License: "/test.pdf",
    PropertyContract: "/test.pdf",
    PerformancePermission: "/test.pdf",
    RequestStatus: "Pending",
  },
  {
    id: 8,
    BusinessName: "Business Name 8",
    BusinessNameLocalized: "الاسم التجاري",
    BusinessType: "Travel Agency",
    BusinessLandline: "123456789",
    SentAt: new Date().toISOString(),
    Cover: "https://via.placeholder.com/150",
    Logo: "https://via.placeholder.com/150",
    Email: "businessname@business.com",
    TaxCard: "/test.pdf",
    ValueAddedCard: "/test.pdf",
    License: "/test.pdf",
    PropertyContract: "/test.pdf",
    PerformancePermission: "/test.pdf",
    RequestStatus: "Pending",
  },
  {
    id: 9,
    BusinessName: "Business Name 0",
    BusinessNameLocalized: "الاسم التجاري",
    BusinessType: "Travel Agency",
    BusinessLandline: "123456789",
    SentAt: new Date().getDate().toString(),
    Cover: "https://via.placeholder.com/150",
    Logo: "https://via.placeholder.com/150",
    Email: "businessname@business.com",
    TaxCard: "/test.pdf",
    ValueAddedCard: "/test.pdf",
    License: "/test.pdf",
    PropertyContract: "/test.pdf",
    PerformancePermission: "/test.pdf",
    RequestStatus: "Pending",
  },
  {
    id: 10,
    BusinessName: "Business Name 99",
    BusinessNameLocalized: "الاسم التجاري",
    BusinessType: "Travel Agency",
    BusinessLandline: "123456789",
    SentAt: new Date().toISOString(),
    Cover: "https://via.placeholder.com/150",
    Logo: "https://via.placeholder.com/150",
    Email: "businessname@business.com",
    TaxCard: "/test.pdf",
    ValueAddedCard: "/test.pdf",
    License: "/test.pdf",
    PropertyContract: "/test.pdf",
    PerformancePermission: "/test.pdf",
    RequestStatus: "Pending",
  },
];

export const columns: ColumnConfig[] = [
  {
    title: "Business Name",
    dataIndex: "BusinessName",
    key: "BusinessName",
    filter: true,
    columnType: "string",
  },
  {
    title: "Business Name Localized",
    dataIndex: "BusinessNameLocalized",
    key: "BusinessNameLocalized",
    filter: true,
    columnType: "string",
  },
  {
    title: "Business Type",
    dataIndex: "BusinessType",
    key: "BusinessType",
    filter: true,
    columnType: "string",
  },
  {
    title: "Business Landline",
    dataIndex: "BusinessLandline",
    key: "BusinessLandline",
    filter: true,
    columnType: "string",
  },
  {
    title: "Sent At",
    dataIndex: "SentAt",
    key: "SentAt",
    filter: true,
    columnType: "string",
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    columnType: "operation",
    // eslint-disable-next-line
    render: (_: any, record: any) => (
      <Row>
        <Col span={12}>
          <Popconfirm
            title={`Are you sure you want to approve ${record.BusinessName}?`}
            onConfirm={
              (e) => {
                if (e) e.stopPropagation();
              }
              // handleApprove(record)
            }
            onCancel={(e) => {
              if (e) e.stopPropagation();
            }}
          >
            <Button
              icon={<IoCheckmark size={21} className="font-bold" />}
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
          </Popconfirm>
        </Col>
        <Col span={12}>
          <Button
            danger
            icon={
              <IoCloseSharp
                size={20}
                className=" border-0 font-bold"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              />
            }
          />
        </Col>
      </Row>
    ),
  },
];
