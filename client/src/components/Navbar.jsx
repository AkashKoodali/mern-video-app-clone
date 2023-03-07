import React, { useState } from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Upload from "./Upload";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 80px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
  margin: 7px;
  border-radius: 10px;
  z-index: 10;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;

const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
 padding-left: 5px;
  border: 1px solid #FF3030;
  border-radius: 10px;
  color: ${({ theme }) => theme.text};
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: #FF3030;
  border: 1px solid #FF3030;
  color: #212B36;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 9px;
  gap: 5px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;

const Navbar = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <Container style={{backgroundColor: open && "transparent"}}>
        <Wrapper>
          <Search>
          <div style={{display: "flex" , alignItems: "center", gap:"10px",marginLeft:"12px"}}>
          <SearchOutlinedIcon style={{color: "gray"}} />
          
            <Input
              placeholder="Search"
              onChange={(e) => setQ(e.target.value)}
            />
            </div>
            <Button onClick={()=>navigate(`/search?q=${q}`)}
            style={{
              padding: "14px", backgroundColor: "#FF3030", border: "none", color: "white", 
              borderRadius: "9px",
              paddingLeft:"20px",
              paddingRight:"20px"
            }}
              >Search</Button>
              
          </Search>
          {currentUser ? (
            <User>
              <VideoCallOutlinedIcon 
              style={{width:40,height:40}}
              onClick={() => setOpen(true)} />
              <Avatar style={{backgroundColor:"yellow"}} src={currentUser.img} />
              {currentUser.name}

              <ExpandMoreIcon/>
            </User>
          ) : (
            <Link to="signin" style={{ textDecoration: "none" }}>
              <Button>
                <AccountCircleOutlinedIcon />
                <span style={{color:"white"}}>  Sign In</span>
              
              </Button>
            </Link>
          )}
        </Wrapper>
      </Container>
      {open && <Upload setOpen={setOpen} />}
    </>
  );
};

export default Navbar;