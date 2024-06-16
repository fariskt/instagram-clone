import React from "react";
import Home from "./Pages/Home";
import SearchBar from "./Pages/SearchBar";
import Explore from "./Pages/Explore";
import Reels from "./Pages/Reels";
import Messages from "./Pages/Messages";
import Notifications from "./Pages/Notifications";
import CreatePost from "./Pages/CreatePost";
import Profile from "./Pages/Profile";
import { AiFillHome } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { MdOutlineAddBox, MdOutlineExplore } from "react-icons/md";
import { TfiVideoClapper } from "react-icons/tfi";
import { RiMessengerLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import "./LeftBar.css";

const LeftBar = () => {
  return (
    <div className="leftbar-container">
      <div className="leftbar-header">
        <img className="insta-logo" src="./instagram-logo.webp" alt="" />
      </div>
      <div className="leftbar-section">
        <div className="home">
          <AiFillHome />
          <h4>Home</h4>
        </div>
        <div className="search-icon">
          <IoSearch />
          <h4>Search</h4>
        </div>
        <div className="Explore">
          <MdOutlineExplore />
          <h4>Explore</h4>
        </div>
        <div className="reels">
          <TfiVideoClapper />
          <h4>Reels</h4>
        </div>
        <div className="message">
          <RiMessengerLine />
          <h4>Messages</h4>
        </div>
        <div className="notifiacation">
          <FaRegHeart />
          <h4>Notifications</h4>
        </div>
        <div className="create-post">
          <MdOutlineAddBox />
          <h4>Create</h4>
        </div>
        <div className="profile-icon">
          <CgProfile/>
          <h4>Profile</h4>
        </div>
        {/* <Home />
        <SearchBar />
        <Explore />
        <Reels />
        <Messages />
        <Notifications />
        <CreatePost />
        <Profile /> */}
      </div>

      <div className="leftbar-bottom"></div>
    </div>
  );
};

export default LeftBar;
