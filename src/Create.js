import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';
import mediaQuery from "styled-media-query";
import { Link } from 'react-router-dom';
function Create (){
    const [maxLength,setMaxLength]=useState(10);
    const [id, setId] = useState(null);
	const [pass, setPass] = useState(null);
    const [name, setName] = useState(null);

    const Click = () => {
		axios.post('http://ec2-54-250-148-171.ap-northeast-1.compute.amazonaws.com:3001/',
		JSON.stringify(
		  {
			"id":id,
			"pass":pass,
	  }
	  ),{
	  }).then(res => {
		console.log(res.data);
		}).catch((e)=> {
		console.log(e);
	  })    
    };
    
    return(
        <div>
        <p style={{textAlign:"center",marginTop:100,marginBottom:50,color:"#fff",fontSize:25}}>部屋を作る</p>
        <div style={{}}>
        <p style={{color: "#fff",fontSize: 20,textAlign: "center",marginRight: 200}}>あなたの名前</p>

        <div style={{ textAlign: "center" }}>
        <input style={{backgroundColor: "white",marginTop: -20,borderRadius: 25,height: "30px",width: "300px",padding: 10,fontSize: "20px"}} 
          type="text"
          maxLength={15}
         onChange={(e) => {setName(e.target.value)}}/>
        </div>

        <p style={{color: "#fff",fontSize: 20,textAlign: "center",marginRight: 250}}>部屋名</p>

        <div style={{ textAlign: "center" }}>
        <input style={{backgroundColor: "white",marginTop: -20,borderRadius: 25,height: "30px",width: "300px",padding: 10,fontSize: "20px"}} 
            type="text" 
            onChange={(e) => {setId(e.target.value)}}/>
        </div>

        <p style={{color: "#fff",fontSize: 20,textAlign: "center",marginRight:180}}>部屋パスワード</p>
        <div style={{ textAlign: "center" }}>
        <input style={{backgroundColor: "white",marginTop: -20,borderRadius: 25,height: "30px",width: "300px",padding: 10,fontSize: "20px",}}
            placeholder={"半角英数"+maxLength+"文字以内"}
            type="text"
            maxLength={maxLength}
            onChange={(e) => {setPass(e.target.value)}}/>
        </div>

        <div style={{ textAlign: "center" }}>
        <Cre type="button" onClick={Click} value="作成する"/>
        </div>
        
        <div style={{textAlign:"center",marginBottom:100,marginTop:10}}>
            <LinkHome to={`/home`}>戻る</LinkHome>
        </div>

        </div>
        </div>
    );
}
export default Create;

export const LinkHome = styled(Link)`
    color:#fff;
    width:200px;
    height:50px;
    background-color:#333;
    font-size:20px;
    text-decoration:none;
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
const Cre = styled.input`
    border-width:1px;
    border-color:#fff;
    color:#fff;
    width:200px;
    height:50px;
    background-color:#333;
    font-size:20px;
    margin-top: 100px;
    margin-bottom:20px;
    &:hover {
    transition: all 0.5s;
    background-color:#fff;
    color:#333;
    border-width:1px;
    border-color:#fff;
  }

    /* @media (max-width: 768px) {

  } */
`;