import React, { useEffect, useState } from "react"; // Import the useCallback hook
import { Button, Space, Table, Flex } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import type { Key } from "antd/lib/table/interface";
import Search from "antd/es/input/Search";
type OnChange = NonNullable<TableProps["onChange"]>;
type Filters = Parameters<OnChange>[1];
type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

export interface ColumnConfig {
  title: string;
  dataIndex: string;

  key: string;
  filter?: boolean;
  columnType: "string" | "number" | "boolean" | "operation";
  // eslint-disable-next-line
  render?: (_: any, record: { [key: string]: any }) => React.ReactNode;
  isCategorical?: boolean;
  // eslint-disable-next-line
  rowSelection?: any;
}

interface DataType {
  key: string;
  name: string;
  patientId: number;
  gender: string;
  diagnosis: string;
  progress: number;
}

interface TableComponentProps {
  columns: ColumnConfig[];
  // eslint-disable-next-line
  dataSource: any[];
  isStaticTable?: boolean;
  // eslint-disable-next-line
  onRowClick?: (record: any, rowIndex: number) => void;
  rowsPerPage?: number;
  searchable?: string;
  size?: "small" | "middle" | "large";
  space?: number;
}

const TableComponent: React.FC<TableComponentProps> = (
  props: TableComponentProps
) => {
  console.log(props.columns);
  const [filteredInfo, setFilteredInfo] = useState<Filters>({});
  const [sortedInfo, setSortedInfo] = useState<Sorts>({});
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState(props.dataSource);
  console.log(props);
  const generateTableColumns = (
    columns: ColumnConfig[]
  ): TableColumnsType<DataType> => {
    return columns.map((column) => {
      return {
        ...generateSorterFilter({
          title: column.title,
          dataIndex: column.dataIndex,
          key: column.key,
          filter: column.filter,
          columnType: column.columnType,
          render: column.render
            ? // eslint-disable-next-line
              (_: any, record: any) => {
                return column.render!(_, record);
              }
            : undefined,
        }),
        ellipsis: true,
      };
    });
  };

  useEffect(() => {
    setData(props.dataSource);
    console.log("data", data);
  }, []);

  const generateSorterFilter = (column: ColumnConfig) => {
    console.log(props.dataSource);
    const filters = props.dataSource
      // eslint-disable-next-line
      .map((record: any) => record[column.dataIndex])
      .filter((value, index, self) => self.indexOf(value) === index)
      .map((value) => ({ text: String(value), value }));

    return {
      ...column,
      render: column.render,
      filters,
      filteredValue: filteredInfo[column.dataIndex] || null,
      // eslint-disable-next-line
      onFilter: (value: boolean | Key, record: any) =>
        String(record[column.dataIndex]).includes(String(value)),
      // eslint-disable-next-line
      sorter: (a: any, b: any) => {
        switch (column.columnType) {
          case "number":
            return Number(a[column.dataIndex]) - Number(b[column.dataIndex]);
          case "string":
            return String(a[column.dataIndex]).localeCompare(
              String(b[column.dataIndex])
            );
          default:
            return 0;
        }
      },
      sortOrder: sortedInfo.columnKey === column.key ? sortedInfo.order : null,
    };
  };

  const handleChange: OnChange = (pagination, filters, sorter) => {
    console.log("Various parameters", filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter as Sorts);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const handleSearch = () => {
    const filteredData = props.dataSource.filter((record) => {
      console.log(record[props.searchable ?? "name"]);
      return record[props.searchable ?? "name"]
        .toLowerCase()
        .includes(search.toLowerCase());
    });
    setData(filteredData);
  };
  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };

  return (
    <div className="mt-5">
      <Flex justify="space-between" className="flex-col sm:flex-row ">
        {!props.isStaticTable && (
          <Space
            style={{ width: "100%", flexFlow: "wrap" }}
            className="mb-2 sm:mb-0"
          >
            <Button onClick={clearFilters}>Clear filters</Button>
            <Button onClick={clearAll}>Clear filters and sorters</Button>
          </Space>
        )}

        {!props.isStaticTable && (
          <Search
            placeholder="Search"
            onChange={(e) => {
              console.log(e.target.value);
              console.log("search is", search);
              setSearch(e.target.value);
            }}
            onSearch={() => handleSearch()}
            className="sm:max-w-xs xs:mt-2 sm:mt-0 sm:ml-auto w-max-[350px]"
          />
        )}
      </Flex>

      <div className="mt-5">
        <Table
          size={props.size}
          scroll={{ x: 600 }}
          pagination={{ pageSize: props.rowsPerPage }}
          onRow={(record, rowIndex) => ({
            onClick: () =>
              props.onRowClick && props.onRowClick(record, rowIndex ?? 0),
          })}
          columns={generateTableColumns(props.columns)}
          dataSource={data}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default TableComponent;
