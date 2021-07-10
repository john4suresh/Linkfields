/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../redux/DataAction";
import { Table } from "antd";
import { Link } from "react-router-dom";

const Home = (props) => {
  const data = props.data;
  console.log(data);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record, index) => {
        return <Link to={`/${index + 1}`}>{text}</Link>;
      },
    },
  ];
  useEffect(() => {
    props.fetchData();
  }, []);
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
