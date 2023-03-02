import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { fetchSuccess, fetchStart } from "../redux/videoSlice.js";

import axios from "axios";
import { useDispatch } from "react-redux";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStart());
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/${type}`);
      setVideos(res.data);
      dispatch(fetchSuccess(res.data))
    };
    fetchVideos();
  }, [type, dispatch]);

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Home;
