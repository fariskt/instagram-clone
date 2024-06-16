import React, { useState } from "react";
import "./Header.css";
import { stories, post, users } from "../../Data/date";
import { FaRegHeart } from "react-icons/fa";
import { PiChatCircleBold } from "react-icons/pi";
import { LuSend } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Header = () => {
  const [storiesIndex, setStoriesIndex] = useState(0);
  const storiesPerPage = 8;

  const forwardStory = () => {
    setStoriesIndex(storiesIndex + storiesPerPage);
    console.log("fhkasdjhkj");
  };
  const backWardStory = () => {
    setStoriesIndex(storiesIndex - storiesPerPage);
  };
  const sfsdj = stories.slice(storiesIndex, storiesIndex + storiesPerPage);

  return (
    <>
      <div className="header-container">
        <div className="previous-icon">
          {storiesIndex > 0 && (
            <span onClick={backWardStory}>
              <IoIosArrowBack />
            </span>
          )}
        </div>
        <div className="header-top">
          {sfsdj.map((item) => (
            <div className="stories">
              <img className="story-img" src={item.image} alt="" />
              <p>{item.name}</p>
            </div>
          ))}
          <div className="forward-icon">
        {storiesIndex+ storiesPerPage < stories.length &&  <span onClick={forwardStory}>
              <IoIosArrowForward />
            </span>}   
          </div>
        </div>
        <div className="header-section">
          {post.map((item, id) => (
            <div className="posts" key={id}>
              <div className="post-top">
                <div className="poster">
                  <img src={item.post_image} alt="" />
                  <p>{item.name}</p>
                </div>
                <button className="three-dot" title="more options">
                  ...
                </button>
              </div>
              <div className="post-img">
                <img src={item.post_image} alt="" />
              </div>
              <div className="post-reviews">
                <div className="review-icons">
                  <div className="main-icons">
                    <span>
                      <FaRegHeart />
                    </span>
                    <span>
                      <PiChatCircleBold />
                    </span>
                    <span>
                      <LuSend />
                    </span>
                  </div>
                  <div className="bookmark">
                    <span>
                      <FaRegBookmark />
                    </span>
                  </div>
                </div>
              </div>
              <div className="total-likes">
                <p>1234 likes</p>
              </div>
              <div className="post-caption">
                <p>{item.name}</p>
                <span>{item.caption}</span>
              </div>
              <div className="view-comments">
                <p style={{ color: "grey" }}>View all comments</p>
                <div className="add-comment">
                  <input
                    style={{
                      border: "none",
                      outline: "none",
                      margin: "10px 0",
                    }}
                    type="text"
                    placeholder="Add a comment..."
                  />
                  <p> ☺</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
