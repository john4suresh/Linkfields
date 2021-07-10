/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchData } from "../redux/DataAction";
import { Pagination } from "antd";
import { Link } from "react-router-dom";

const Home = (props) => {
  const { data, fetchData } = props;

  const PokemonData = data.map((ele, index) => {
    return { ...ele, id: index + 1 };
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    fetchData();
  }, []);

  const onChange = (page) => {
    setCurrentPage(page);
  };

  function capitalize(word) {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  }

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = PokemonData.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="home">
      {currentPosts.map(({ name, id }) => (
        <h1 key={id} className="listItem">
          <Link className="link" to={`/${id}`}>
            {capitalize(name)}
          </Link>
        </h1>
      ))}
      <Pagination
        current={currentPage}
        total={data.length}
        onChange={onChange}
        showSizeChanger={false}
      />
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
