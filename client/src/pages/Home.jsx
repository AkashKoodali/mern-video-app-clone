import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { fetchSuccess, fetchStart } from "../redux/videoSlice.js";

import { useDispatch } from "react-redux";
import LoadingSpinner from "../utils/LoadingSpinner";
import { publicRequest } from "../config";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 2rem;
  margin: 0;
  align-items: center;
  width: auto;
`;

const Home = ({type}) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStart());
    const fetchVideos = async () => {
      setLoading(true);
      const res = await publicRequest.get(`/api/videos/${type}`);
      setVideos(res.data);
      dispatch(fetchSuccess(res.data));
      setLoading(false);
    };
    fetchVideos();
  }, [type, dispatch]);

  return (
    <Container>
      {loading && <LoadingSpinner />}
      {videos.map((video) => (
        <Card key={video._id} video={video}/>
      ))}
    </Container>
  );
};

export default Home;
