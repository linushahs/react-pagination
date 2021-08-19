import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelopeOpen,
  faCalendarTimes,
  faMap,
  faPhone,
  faLock,
  faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";

function UserData({ isLoading, showUserData, title, subTitle, newRandomUser }) {
  return (
    <div className="main">
      <h3>My {subTitle} is</h3>
      <h1>{title}</h1>
      <div className="buttons-container">
        <FontAwesomeIcon
          icon={faUser}
          className="icon"
          onMouseEnter={() => showUserData("name")}
        />
        <FontAwesomeIcon
          icon={faEnvelopeOpen}
          className="icon"
          onMouseEnter={() => showUserData("email")}
        />
        <FontAwesomeIcon
          icon={faCalendarTimes}
          className="icon"
          onMouseEnter={() => showUserData("age")}
        />
        <FontAwesomeIcon
          icon={faMap}
          className="icon"
          onMouseEnter={() => showUserData("country")}
        />
        <FontAwesomeIcon
          icon={faPhone}
          className="icon"
          onMouseEnter={() => showUserData("phone")}
        />
        <FontAwesomeIcon
          icon={faLock}
          className="icon"
          onMouseEnter={() => showUserData("password")}
        />
      </div>
      <button className="random-user-btn" onClick={newRandomUser}>
        {isLoading ? "Loading..." : "Random User"}
      </button>
    </div>
  );
}

export default UserData;
