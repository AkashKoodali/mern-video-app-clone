import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card";
import LoadingSpinner from "../utils/LoadingSpinner";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 2rem;
  margin: 0;
  align-items: center;
  width: auto;
`;

const Search = () => {
  const [videos, setVideos] = useState([]);
  const query = useLocation().search;
  const [load,setload]=useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/api/videos/search${query}`);
      setVideos(res.data);
      setload(false);
    };
    fetchVideos();
  }, [query]);

  return <Container>
    {load && <LoadingSpinner/> }
  
     {videos.map(video=>(
      <Card key={video._id} video={video}/>))}


  </Container>;
};

export default Search;