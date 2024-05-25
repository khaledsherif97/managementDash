
import  { useState } from 'react';

import type { TableColumnsType, TableProps } from 'antd';
import { Button, Space, Table } from 'antd';

type OnChange = NonNullable<TableProps<DataType>['onChange']>;
type Filters = Parameters<OnChange>[1];

type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

interface DataType {
  key: string;
  name: string;
  appID: number;
  address: string;
  category:string;
}

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    appID: 32,
    address: 'New York No. 1 Lake Park',
    category:"buss",
  },
  {
    key: '2',
    name: 'Jim Green',
    appID: 42,
    address: 'London No. 1 Lake Park',
    category:"travel",
  },
  {
    key: '3',
    name: 'Joe Black',
    appID: 32,
    address: 'Sydney No. 1 Lake Park',
    category:"buss",
  },
  {
    key: '4',
    name: 'Jim Red',
    appID: 32,
    address: 'London No. 2 Lake Park',
    category:"travel",
  },
  {
    key: '5',
    name: 'Jim Red',
    appID: 32,
    address: 'London No. 2 Lake Park',
    category:"travel",
  },
  {
    key: '6',
    name: 'Joe Black',
    appID: 32,
    address: 'Sydney No. 1 Lake Park',
    category:"buss",
  },
  {
    key: '7',
    name: 'Jim Red',
    appID: 32,
    address: 'London No. 2 Lake Park',
    category:"travel",
  },
  {
    key: '8',
    name: 'Jim Red',
    appID: 32,
    address: 'London No. 2 Lake Park',
    category:"travel",
  },
  {
    key: '9',
    name: 'Joe Black',
    appID: 32,
    address: 'Sydney No. 1 Lake Park',
    category:"buss",
  },
  {
    key: '10',
    name: 'Jim Red',
    appID: 32,
    address: 'London No. 2 Lake Park',
    category:"travel",
  },
  {
    key: '11',
    name: 'Jim Red',
    appID: 32,
    address: 'London No. 2 Lake Park',
    category:"travel",
  },
  {
    key: '12',
    name: 'Joe Black',
    appID: 32,
    address: 'Sydney No. 1 Lake Park',
    category:"buss",
  },
  {
    key: '13',
    name: 'Jim Red',
    appID: 32,
    address: 'London No. 2 Lake Park',
    category:"travel",
  },
  {
    key: '14',
    name: 'Jim Red',
    appID: 32,
    address: 'London No. 2 Lake Park',
    category:"travel",
  },
  {
    key: '15',
    name: 'Joe Black',
    appID: 32,
    address: 'Sydney No. 1 Lake Park',
    category:"buss",
  },
  {
    key: '16',
    name: 'Jim Red',
    appID: 32,
    address: 'London No. 2 Lake Park',
    category:"travel",
  },
  {
    key: '17',
    name: 'Jim Red',
    appID: 32,
    address: 'London No. 2 Lake Park',
    category:"travel",
  },
];

const DashTable = () => {
  const [filteredInfo, setFilteredInfo] = useState<Filters>({});

  const [sortedInfo, setSortedInfo] = useState<Sorts>({});

  const handleChange: OnChange = (pagination, filters, sorter,) => {
   
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter as Sorts);
   
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };

 

  const columns: TableColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filters: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim' },
      ],
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value as string),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Application ID',
      dataIndex: 'appID',
      key: 'appID',
      sorter: (a, b) => a.appID - b.appID,
      sortOrder: sortedInfo.columnKey === 'appID' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      filters: [
        { text: 'London', value: 'London' },
        { text: 'New York', value: 'New York' },
      ],
      filteredValue: filteredInfo.address || null,
      onFilter: (value, record) => record.address.includes(value as string),
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      filters: [
        { text: 'travel', value: 'travel' },
        { text: 'buss', value: 'buss' },
      ],
      filteredValue: filteredInfo.category || null,
      onFilter: (value, record) => record.category.includes(value as string),
      sorter: (a, b) => a.category.length - b.category.length,
      sortOrder: sortedInfo.columnKey === 'category' ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];


  return (
   <div className='w-100'>
    <Space style={{ marginBottom: 16 }}>
       
       <Button onClick={clearFilters}>Clear filters</Button>
       <Button onClick={clearAll}>Clear filters and sorters</Button>
     </Space>
     <Table  columns={columns} dataSource={data} onChange={handleChange} />
   </div>
  )
}

export default DashTable

