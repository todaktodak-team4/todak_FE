import { useState, useEffect } from "react";
import React from "react";
import * as M from "../css/StyledNav";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("access_token")); // localStorage에서 토큰 가져오기
  const [userId, setUserId] = useState(null); // 추가: 사용자 ID 상태
  const [showLoginModal, setShowLoginModal] = useState(false); // 로그인 모달 창 보이기 여부 상태

  const goToRemeberTree = async () => {
    if (token) {
      try {
        const response = await fetch('http://3.38.125.151/accounts/api/get-user-id-from-token', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // 토큰을 헤더에 추가
          },
        });
    
        if (response.ok) {
          const data = await response.json();
          const userId = data.userId; // API 응답에서 사용자 ID를 가져옴
          setUserId(userId); // 사용자 ID 상태에 저장
          // 사용자 ID를 상태에 저장하거나 필요한 작업 수행
          console.log('User ID:', userId);

          const treeResponse = await fetch(`http://3.38.125.151/rememberTree/user/${userId}/`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`, // 토큰을 헤더에 추가
            },
          });

          if (treeResponse.ok) {
            const treeData = await treeResponse.json();
            console.log('Remember Tree Data:', treeData);
            // 사용자 ID와 기억나무 데이터로 원하는 작업 수행

            if(treeData.length>0){
              navigate('/rememberTree'); // 페이지 이동
            }else{
              alert('기억나무를 생성해주세요.');
              navigate('/plantTreeStepOne'); // 페이지 이동
            }
          
          } else {
            navigate('/plantTreeStepOne'); // 페이지 이동
          } 
        } else {
          setShowLoginModal(true); // 응답이 실패한 경우 로그인 모달 창 보이기
        }
      } catch (error) {
        console.error('Error fetching user ID:', error);
        setShowLoginModal(true); // 에러 발생 시 로그인 모달 창 보이기
      }

      
      // navigate("/plantTreeStepOne");
    } else {
      setShowLoginModal(true); // 토큰이 없는 경우 모달 창 보이기
    }
  };

  return (
    <M.Nav>
      <M.Navbar>
        <M.NavItem>
          <a href="/">HOME</a>
          <hr />
        </M.NavItem>
        <M.NavItem>
          <a href="/memorialHallList">온라인 헌화</a>
          <hr />
        </M.NavItem>
        <M.NavItem>
          <a onClick={goToRemeberTree}>기억 나무</a>
          <hr />
        </M.NavItem>
        <M.NavItem>
          <a href="/memorialHallSignup">헌화 공간 신청</a>
          <hr />
        </M.NavItem>
      </M.Navbar>
    </M.Nav>
  );
};

export default Nav;
