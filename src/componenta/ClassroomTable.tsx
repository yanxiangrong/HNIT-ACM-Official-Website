import { Table } from 'antd';
import "antd/dist/antd.css"
import "./ClassroomTable.css"

function ClassroomTable() {
  const columns = [
    {
      dataIndex: 'number',
      key: 'number',
      className: "tableItem"
    },
    {
      dataIndex: 'name',
      key: 'name',
      className: "tableItem"
    },
    {
      dataIndex: 'detail',
      key: 'detail',
    },
  ];
  const data = [
    {
      key: '1',
      number: "2112",
      name: "机器人实验室",
      detail: "NAO机器人实验室。",
    },
    {
      key: '2',
      number: "2206",
      name: "ACM团队工作室",
      detail: "ACM实训室",
    },
    {
      key: '3',
      number: "2202",
      name: "硬件工作坊",
    },
    {
      key: '4',
      number: "2204",
      name: "软件工作坊",
    },
    {
      key: '5',
      number: "2416",
      name: "开放机房",
      detail: "ACM晚训机房。"
    },
    {
      key: '6',
      number: "2518",
      name: "物联网实验室",
    },
    {
      key: '7',
      number: "2508",
      name: "物联网实验室",
      detail: "新申请的教室，有2台空调，有千兆网。"
    },
    {
      key: '8',
      number: "2606",
      name: "软件工作室",
      detail: "ACM数据中心。"
    },
    {
      key: '9',
      number: "2607",
      name: "软件工作室",
    },
  ];

  return (
    <Table columns={columns} dataSource={data} pagination={false} showHeader={false} />
  )
}

export default ClassroomTable;