import React from "react";
import * as H from "../css/StyledMemorialHall";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
  return (
    <H.MemorialMessageContent>
      <H.MMCProfile>
        <H.MMC1>
          <img
            id="line"
            src={`${process.env.PUBLIC_URL}/img/standardProfile.svg`}
            alt="line"
          />
        </H.MMC1>
        <H.MMC2>{name}</H.MMC2>
      </H.MMCProfile>
      <H.MMCContent>{comment}</H.MMCContent>
    </H.MemorialMessageContent>
  );
};

export default MemorialMessage;
