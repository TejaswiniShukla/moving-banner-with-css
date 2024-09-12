import { Box } from "@mui/material";
import React from "react";
import "./App.css";

function App() {
  
  const bricks = [
    { width: "450px", height: "200px", backgroundColor: "green" },
    { width: "450px", height: "200px", backgroundColor: "yellow" },
    { width: "450px", height: "200px", backgroundColor: "pink" },
    { width: "450px", height: "200px", backgroundColor: "orange" },
    { width: "450px", height: "200px", backgroundColor: "white" },
    { width: "450px", height: "200px", backgroundColor: "purple" },
  ];
  return (
    <>
      <Box
        className="logos"
        sx={{
          mt: 5,
        }}
      >
        <Box className="logos-slide">
          {bricks.map((e) => {
            return (
              <Box
                sx={{
                  width: e.width,
                  height: e.height,
                  backgroundColor: e.backgroundColor,
                }}
              ></Box>
            );
          })}
        </Box>
        <Box className="logos-slide">
          {bricks.map((e) => {
            return (
              <Box
                sx={{
                  width: e.width,
                  height: e.height,
                  backgroundColor: e.backgroundColor,
                }}
              ></Box>
            );
          })}
        </Box>
        <Box className="logos-slide">
          {bricks.map((e) => {
            return (
              <Box
                sx={{
                  width: e.width,
                  height: e.height,
                  backgroundColor: e.backgroundColor,
                }}
              ></Box>
            );
          })}
        </Box>
      </Box>
      <Box
        className="logos"
        sx={{
          mt: 5,
        }}
      >
        <Box className="logos-slide2">
          {bricks.map((e) => {
            return (
              <Box
                sx={{
                  width: e.width,
                  height: e.height,
                  backgroundColor: e.backgroundColor,
                }}
              ></Box>
            );
          })}
        </Box>
        <Box className="logos-slide2">
          {bricks.map((e) => {
            return (
              <Box
                sx={{
                  width: e.width,
                  height: e.height,
                  backgroundColor: e.backgroundColor,
                }}
              ></Box>
            );
          })}
        </Box>
        <Box className="logos-slide2">
          {bricks.map((e) => {
            return (
              <Box
                sx={{
                  width: e.width,
                  height: e.height,
                  backgroundColor: e.backgroundColor,
                }}
              ></Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
}
export default App;
