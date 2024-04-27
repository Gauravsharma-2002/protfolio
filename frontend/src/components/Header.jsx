// import React from 'react'
import { Box, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useReducer } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { RiAccountPinCircleFill } from "react-icons/ri";

const initialVal = true;
function reducerMethod(state, action) {
  switch (action.type) {
    case "open":
      return false;
    case "close":
      return true;
    default:
      return state;
  }
}

const Header = () => {
  const [state, dispatch] = useReducer(reducerMethod, initialVal);
  // const [navOpen, setNavOpen] = useState(false);
  // const handelNav = () => setNavOpen((navOpen) => !navOpen);
  // console.log(navOpen);
  return (
    <>
      {state ? (
        <Stack
          // position={"relative"}
          direction={"row"}
          sx={{
            width: "100%",
            // border: "1px solid red",
            height: "8vh",
            paddingX: "1.5rem",
          }}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box
            display={"flex"}
            height={"100%"}
            // sx={{ border: "1px solid red" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Button
              color="secondary"
              size="large"
              sx={{ borderRadius: "200px", padding: ".9rem" }}
              // onClick={handelNav}
              onClick={() => dispatch({ type: "open" })}
            >
              <FaBars color="#655DBB" size={"2rem"} />
            </Button>
          </Box>
          <Box>
            date
            <span>time</span>
          </Box>
        </Stack>
      ) : (
        <NavPage dispatch={dispatch} />
      )}
    </>
  );
};

function NavPage({ dispatch }) {
  const styel = {
    
  }
  return (
    <>
      <Stack
        position={"relative"}
        width={"100%"}
        height={"100vh"}
        direction={"row"}
        gap={".3rem"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          height={"100%"}
          // sx={{ border: "1px solid red" }}
          justifyContent={"space-around"}
          alignItems={"center"}
          width={"15%"}
        >
          <Box>
            <Button
              onClick={() => dispatch({ type: "close" })}
              color="secondary"
              size="large"
              sx={{ borderRadius: "200px", padding: ".9rem" }}
            >
              <RxCross2 color="#655DBB" size={"2rem"} />
            </Button>
          </Box>
          <Box>
            <Link to={"/"} onClick={() => dispatch({ type: "close" })}>
              Logo
            </Link>
          </Box>
        </Box>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          direction={"row"}
          // border={"1px solid red"}
          width={"100%"}
        >
          <Box
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
            style={{
              cursor: "pointer",
              color: "#FFFFFF",
              backgroundColor: "rgb(62, 84, 172)",
            }}
            height={"100%"}
           
          >
            <Link
              to={"/project"}
              onClick={() => dispatch({ type: "close" })}
              style={{}}
            >
              Projects
            </Link>
          </Box>
          <Box
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
            style={{ cursor: "pointer" }}
            height={"100%"}
          >
            <Link to={"/about"} onClick={() => dispatch({ type: "close" })}>
              About
            </Link>
          </Box>
          <Box
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
            style={{ cursor: "pointer" }}
            height={"100%"}
          >
            <Link to={"/contact"} onClick={() => dispatch({ type: "close" })}>
              Contact
            </Link>
          </Box>
          <Box
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
            style={{ cursor: "pointer" }}
            height={"100%"}
          >
            <Link to={"/login"} onClick={() => dispatch({ type: "close" })}>
              <RiAccountPinCircleFill color="#3E54AC" size={"5rem"} />
            </Link>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}

export default Header;
