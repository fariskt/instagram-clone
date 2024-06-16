import React from "react";
import { CgProfile } from "react-icons/cg";
import { users } from "../../Data/date";
import "./RightBar.css";
const RightBar = () => {
  return (
    <div className="rightbar-container">
      <div className="profile-switch">
        <div className="profile-details">
          <img
            src=" https://hips.hearstapps.com/hmg-prod/images/lionel-messi-celebrates-after-their-sides-third-goal-by-news-photo-1686170172.jpg?crop=0.66653xw:1xh;center,top&resize=640:*"
            alt=""
          />
          <div className="profile-name">
            <p style={{fontWeight:"550",fontSize: "15px", margin:"2px 0"}}>leomessi</p>
            <p style={{color: "grey", fontSize: "13px"}}>Lional Messi</p>
          </div>
        </div>
        <div className="switch-account">
          <h5>Switch</h5>
        </div>
      </div>
      <div className="suggested-profile">
        <h5 style={{color: "grey", fontWeight:"500",fontSize: "15px"}}>Suggested for you</h5>
        <h5>See All</h5>
      </div>
      <div className="suggested-acc">
        {users.map((item, id) => (
          <div className="suggested-id">
            <div className="user">
              <img src={item.user_image} alt="" />
              <div className="id-name">
                <p style={{fontWeight:"550",fontSize: "15px", margin: "2px 0"}}>{item.username}</p>
                <p style={{color: "grey", fontSize: "13px"}}>suggested for you</p>
              </div>
            </div>
            <div className="follow-btn">
              <h5>Follow</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightBar;
