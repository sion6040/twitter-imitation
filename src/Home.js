import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mediaQuery from "styled-media-query";

function Home (){
    return(
        <div>
            <div style={{marginTop:120}} />
            <h1 style={{textAlign:"center",color:"#fff",marginBottom:60}}>ホーム画面予定(名前やロゴなど)</h1>
            <div style={{textAlign:"center"}}>
            <LinkCreate to={`/create`}>部屋を作る</LinkCreate>
        </div>
            
            <div style={{marginTop:80}} />

        <div style={{textAlign:"center"}}>
            <LinkJoin to={`/join`}>部屋に参加する</LinkJoin>
        </div>

        <div style={{marginTop:80}} />

<div style={{textAlign:"center"}}>
    <LinkJoin to={`/conf`}>開発用</LinkJoin>
</div>

        </div>
    );
}
export default Home;

export const LinkCreate = styled(Link)`
  color:#333;
  background-color:#fff;
  font-weight:bold;
  text-decoration:none;
  padding:20px 75px 20px 75px;
  border-radius:10;
    &:hover {
        color:#333;
        background-color:#fff;
        padding:14px 95px 14px 95px;
        transition: all 0.5s;
    /* transition: background-color 0.5s ease-in-out 0s;
    transition: 0.5s;
    transform: scale(1.1); */
  }

    /* @media (max-width: 768px) {

  } */
`;

export const LinkJoin = styled(Link)`
  color:#333;
  background-color:#fff;
  font-weight:bold;
  text-decoration:none;
  padding:20px 60px 20px 60px;
  border-radius:10;
    &:hover {
        color:#333;
        background-color:#fff;
        padding:14px 80px 14px 80px;
        transition: all 0.5s;
    /* transition: background-color 0.5s ease-in-out 0s;
    transition: 0.5s;
    transform: scale(1.1); */
  }

    /* @media (max-width: 768px) {

  } */
`;