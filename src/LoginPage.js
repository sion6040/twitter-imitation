import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from "./Home";
import Prof from "./Prof";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const server = 'http://localhost:3001/Users';


var ID, PASS;
var i = 0, key = 0;
var res = [];
function API() {
  useEffect(() => {
    const getUser = async () => {
      res = await axios.get(server);
    }
    getUser();
  }, [])
}

function Page() {
  const [id, setId] = useState(null);
  const [pass, setPass] = useState(null);
  const [login, setLogin] = useState(false);

  const Click = () => {
    for (i = 0; i < 2; i++) {
      if (ID === res.data[i].id && PASS === res.data[i].pass) {
        alert(res.data[i].name + "としてログインしました");
        setLogin(true);
        key = 1;
      }
    }
    if (key === 0) {
      alert("IDまたはパスワードが間違っています");
    }
    console.log(res.data);
  }

  ID = id;
  PASS = pass;
  API();
  if (login === false) {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <span style={{ color: "white", fontSize: "45px" }}>ID<span style={{ marginLeft: "60px" }}>：</span>
            <input style={{ backgroundColor: "white", height: "30px", width: "300px", paddingTop: "25px", marginLeft: "0px", fontSize: "20px" }} type="text" onChange={(e) => { setId(e.target.value) }} ></input>
            <br />
      PASS：
      <input type="password" style={{ backgroundColor: "white", height: "30px", width: "300px", paddingTop: "25px", fontSize: "20px" }} onChange={(e) => { setPass(e.target.value) }}></input>
          </span><br />
          <input type="button" onClick={Click} value="login" style={{ width: "100px", width: "200px", height: "40px", backgroundColor: "white", fontSize: "20px", marginLeft: "270px" }}></input>
          <br /><br />
          <span style={{ fontSize: "15px", color: "white" }}>入力ID：{ID}</span>
          <span style={{ fontSize: "15px", color: "white" }}>　入力PASS：{PASS}</span>
        </div>
      </div>
    );
  }
  else if (login === true) {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <div style={{ flexGrow: 1 }}>
            <Router>
              <div>
                <Link to="/home"><button style={{color:"white"}}>Home</button></Link>
                <span>　　　</span>
                <Link to="/prof"><span>神ならざる者の〇〇</span></Link>
                <span>　　　</span>
                <Route path="/home" component={Home}></Route>
                <Route path="/prof" component={Prof}></Route>
              </div>
            </Router>
            <p style={{ fontSize: "20px", color: "white" }}>ホーム</p>
            <p>プロフィール</p>
            <p>通知</p>
            <p>設定</p>
          </div>
          <div style={{ flexGrow: 2 }}>koyouso2</div>
        </div>
      </div>
    );
  }
}
export default Page;