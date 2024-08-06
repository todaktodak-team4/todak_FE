import React from "react";
import * as H from "../css/StyledMemorialHall";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = "http://3.38.125.151";

const MemorialMessage = ({
  memorialHall,
  key,
  postId,
  hall,
  comment,
  name,
  profile,
  donation,
  messageId,
  //props
}) => {
  
  console.log("이름:", name);
  console.log("한마디:", comment);
  console.log("프로필:", profile);

  const baseUrl = `${BACKEND_URL}`;
  // Set the profile image URL conditionally
  const imageUrl = profile
    ? `${baseUrl}${profile}`  // Profile image from server
    : `${process.env.PUBLIC_URL}/static/img/standardProfile.svg`;  // Default image



  return (
    <H.MemorialMessageContent>
      <H.MMCProfile>
        <H.MMC1>

        <img
            id="line"
            src={imageUrl}  // Set the profile image here
            alt="Profile"
            style={{ width: '100px', height: '100px', borderRadius: '50%' }}  // Adjust as needed
/>
        </H.MMC1>
        <H.MMC2>{name}</H.MMC2>
      </H.MMCProfile>
      <H.MMCContent>{comment}</H.MMCContent>
    </H.MemorialMessageContent>
  );
};

export default MemorialMessage;
