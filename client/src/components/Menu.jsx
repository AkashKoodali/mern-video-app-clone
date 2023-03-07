import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";

import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
// import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
// import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
// import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
// import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";

const Container = styled.div`
  width: 14rem;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
  margin-top: 7px;
  margin-left: 7px;
  border-radius: 10px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
  overflow-y: scroll;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Wrapper = styled.div`
  padding: 5px 20px;
  gap: 20px;
`;


const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 10px 15px;
  margin: 20px;
  border-radius: 10px;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.3px solid gray;
`;

// const Login = styled.div``;
// const Button = styled.button`
//   padding: 5px 15px;
//   background-color: transparent;
//   border: 1px solid #3ea6ff;
//   color: #3ea6ff;
//   border-radius: 3px;
//   font-weight: 500;
//   margin-top: 10px;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   gap: 5px;
// `;

// const Title = styled.h2`
//   font-size: 14px;
//   font-weight: 500;
//   color: #aaaaaa;
//   margin-bottom: 20px;
// `;

const Menu = ({ darkMode, setDarkMode }) => {
  const { currentUser } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      dispatch(logout());
      localStorage.clear();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Container>
        <Link to="/" style={{ textDecoration: "none", color: "inherit"}}>
          <div style={{display: "flex", alignItems: "center",marginTop:"20px",marginLeft:"20px", gap:5}}>
        <PlayCircleIcon sx={{color: "red", width:56, height:56}} />
          <h2>Yoy Tube</h2>
          </div>
        </Link>
      <Wrapper>

        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <HomeIcon />
            Home
          </Item>
        </Link>

        <Link to="trends" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <ExploreOutlinedIcon />
            Explore
          </Item>
        </Link>

        <Link
          to="subscriptions"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <SubscriptionsOutlinedIcon />
            Subscriptions
          </Item>
        </Link>

        {/* <Hr /> */}

        {/* <Item>
          <VideoLibraryOutlinedIcon />
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          History
        </Item> */}

        <Hr/>

       
        <Item>
          <MovieOutlinedIcon />
          Movies
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          Live
        </Item>
        <Hr/>

        {currentUser ? (
              <>
              <Item onClick={handleLogout}>
                  <ExitToAppIcon />
                  Log Out
                
                </Item>
              </>
            ) : (
              <>
                
                  <div style={{margin: '20px'}}>Sign in to like videos, comment, and subscribe.</div>
                  <Item>
                      <AccountCircleOutlinedIcon />
                      SIGN IN
                  </Item>
              
              </>
            )}

    <Hr/>
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
