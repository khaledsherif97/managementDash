/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Layout, Button, Space, Typography } from "antd";
import TableComponent, { ColumnConfig } from "../../components/Table/Table";

const { Title } = Typography;
const { Header, Content } = Layout;

interface Listing {
  key: string;
  name: string;
  vendorId: number;
  category: string;
  status: string;
}

const listingData: Listing[] = [
  {
    key: "1",
    name: "Hotel Alpha",
    vendorId: 101,
    category: "Hotel",
    status: "Active",
  },
  {
    key: "2",
    name: "Restaurant Beta",
    vendorId: 202,
    category: "Restaurant",
    status: "Inactive",
  },
  {
    key: "3",
    name: "Tour Gamma",
    vendorId: 303,
    category: "Tour",
    status: "Active",
  },
  {
    key: "4",
    name: "Resort Delta",
    vendorId: 404,
    category: "Resort",
    status: "Inactive",
  },
  // Add more entries as needed
];

const columns: ColumnConfig[] = [
  { title: "Name", dataIndex: "name", key: "name", columnType: "string" },
  {
    title: "Vendor ID",
    dataIndex: "vendorId",
    key: "vendorId",
    columnType: "number",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    columnType: "string",
  },
  { title: "Status", dataIndex: "status", key: "status", columnType: "string" },
  {
    title: "Operation",
    dataIndex: "operation",
    key: "operation",
    columnType: "operation",
    // eslint-disable-next-line
    render: (_, record: any) => (
      <Space size="middle">
        <Button type="link">Edit</Button>
        <Button type="link" danger>
          Delete
        </Button>
      </Space>
    ),
  },
];

const ListingManagement: React.FC = () => {
  const onRowClick = (record: any, rowIndex: number) => {
    console.log(`Row clicked:`, record, `at index:`, rowIndex);
  };

  return (
    <Layout className="min-h-screen bg-gray-100">
      <Header className="bg-white shadow-md p-4">
        <Title level={3} className="m-0">
          Listing Management
        </Title>
      </Header>
      <Content className="p-8">
        <Space className="mb-4">
          <Button type="primary">Add New Listing</Button>
        </Space>
        <TableComponent
          columns={columns}
          dataSource={listingData}
          onRowClick={onRowClick}
          rowsPerPage={5}
          searchable="name"
          size="middle"
        />
      </Content>
    </Layout>
  );
};

export default ListingManagement;
