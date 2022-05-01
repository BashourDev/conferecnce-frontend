import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../assets/logo.png";

const Container = ({ info }) => {
  return (
    <div>
      <div className="w-full h-10 bg-hpu"></div>
      <div className="w-full h-44 lg:h-36 bg-white flex items-center justify-center px-5 lg:px-20">
        <div className="flex items-center space-x-5">
          <img src={logo} alt="logo" className="w-20" />
          <div>
            <h1 className="font-semibold text-hpu text-lg lg:text-xl">
              AL-HAWASH PRIVATE UNIVERSITY
            </h1>
            {/* <p className="text-hpu text-lg lg:text-xl font-medium">
              {info?.name}
            </p> */}
          </div>
        </div>

        <div></div>
      </div>

      <div className="w-full h-10 bg-hpu"></div>
      <Outlet />
      <div
        id="contact-us"
        className="bg-hpu w-full p-10 text-white flex justify-center"
      >
        <div className="flex flex-col max-w-5xl w-full">
          <h1 className="text-3xl mb-5">Contact Us</h1>
          <span className="text-white/80">
            <span className="text-lg font-medium text-white">
              For enquiries:{" "}
            </span>{" "}
            Mob: +963993115570; +963993119190; +12017574654{" "}
          </span>
          <span className="text-white/80">
            <span className="text-lg font-medium text-white">Email: </span>
            conference2022@hpu.edu.sy{" "}
          </span>
          <span className="text-white/80">
            <span className="text-lg font-medium text-white">
              Visit Our Website:{" "}
            </span>
            <a href="http://www.hpu.edu.sy">hpu.edu.sy</a>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Container;
