import React,{useState} from 'react';

function LoginPage() {
  const[id,setId]=useState(null);
  const[pass,setPass]=useState(null);
  return (
    <div>
      ID:<input type="text" onChange={(e)=>{setId(e.target.value)}} ></input>
      <br />
      PASS:<input type="password" onChange={(e)=>{setPass(e.target.value)}}></input>
      <br />
      <input type="button" value="login" style={{width:"100px"}}></input>
    <br />
    取得ID：{id}<br />
    取得PASS：{pass}<br />
    </div>
  );
}
export default LoginPage;
