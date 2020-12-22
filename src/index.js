import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import reportWebVitals from './reportWebVitals';
import "./index.css";
function App(){
  return(
    <div>
      <div style={{textAlign:"center"}}>
        <hr style={{borderStyle:"solid",borderColor:"white",borderWidth:"2px"}}></hr>
        <p style={{fontSize:"30px",color:"white"}}>Twitter Imitation</p>
        <hr style={{borderStyle:"solid",borderColor:"white",borderWidth:"2px"}}></hr>
      <br />      <br />      <br />
      </div>
    <LoginPage />
    <div style={{display:"flex"}}>
      <div style={{flexGrow:1}}>
        <p>ホーム</p>
        <p>プロフィール</p>
        <p>通知</p>
        <p>設定</p>
      </div>
      <div style={{flexGrow:2}}>koyouso2</div>
    </div>
    </div>
  )
}
ReactDOM.render(<App />,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
