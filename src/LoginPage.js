import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./Home";
import Prof from "./Prof";
import Conf from "./Conf";
import Noti from "./Noti";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
// const server = "http://localhost:3000/Users";

function Page() {
	const [id, setId] = useState(null);
	const [pass, setPass] = useState(null);
	const [login, setLogin] = useState(false);
	// const [token,setToken]=useState(null);

	const Click = () => {
		console.log("a");
		axios.post('localhost:3000/login',
		JSON.stringify(
		  {
			"id":id,
			"pass":pass,
	  }
	  ),{
		headers:{
		  'Accept': 'application/json', 
		  'Content-Type': 'application/json'
		}
	  }).then(res => {
		setLogin(true);
		}).catch((e)=> {
		console.log(e);
	  })    
	};

	API();
	if (login === false) {
		return (
			<div>
				<p style={{textAlign:"center",marginTop:200,color:"#fff",fontSize:20}}></p>
			<div style={{}}>
			<p style={{color: "#fff",fontSize: 20,textAlign: "center",marginRight: 200}}>ログインID</p>

			<div style={{ textAlign: "center" }}>
			<input style={{backgroundColor: "white",marginTop: -20,borderRadius: 25,height: "30px",width: "300px",padding: 10,fontSize: "20px"}} 
			    type="text" 
				onChange={(e) => {setId(e.target.value)}}/>
			</div>

			<p style={{color: "#fff",fontSize: 20,textAlign: "center",marginRight: 200}}>パスワード</p>
			<div style={{ textAlign: "center" }}>
			<input style={{backgroundColor: "white",marginTop: -20,borderRadius: 25,height: "30px",width: "300px",padding: 10,fontSize: "20px",}}
			    placeholder="半角英数20文字以内"
				type="text"
				onChange={(e) => {setPass(e.target.value)}}/>
			</div>

			<div style={{ textAlign: "center" }}>
			<input type="button" onClick={Click} value="ログイン" style={{borderWidth: 0,color: "rgb(19, 85, 148)",width: "200px",height: "50px",backgroundColor: "white",fontSize: "20px",marginTop: 100}}/>
			</div>
			</div>
			</div>
		);
	} else if (login === true) {
		return (
			<div>
				<div style={{ display: "flex" }}>
					<div style={{ flexGrow: 1 }}>
						<Router>
							<div>
								<Link to="/home">
									<button style={{ color: "white" }}>ホーム</button>
								</Link>
								<span>　　　</span>
								<Link to="/prof">
									<span>プロフィール</span>
								</Link>
								<span>　　　</span>
								<Link to="/noti">
									<span>通知</span>
								</Link>
								<span>　　　</span>
								<Link to="/conf">
									<span>設定</span>
								</Link>
								<Route path="/home" component={Home}></Route>
								<Route path="/prof" component={Prof}></Route>
								<Route path="/noti" component={Noti}></Route>
								<Route path="/conf" component={Conf}></Route>
							</div>
						</Router>
						<p>設定</p>
					</div>
					<div style={{ flexGrow: 2 }}>koyouso2</div>
				</div>
			</div>
		);
	}
}
export default Page;
