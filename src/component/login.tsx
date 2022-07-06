import Banner from "../image/Banner.png"
import logo from "../image/logo.png"
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { Button, Col, Container, Form, Navbar } from "react-bootstrap";
import React, { useContext, useEffect, useRef, useState } from "react";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth";


import TrangChu from "../component/TrangChu"
import {NavLink, useNavigate} from "react-router-dom"

  const Login = () => {
    const [error, setError] = useState(false);
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    
    useEffect(() => {
      if (loading) {
        return;
      }
      if (user) navigate("/Page-home");
    }, [user, loading]);

    const loginUser = async (email:string, password:string) => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (err) {
        console.error(true);
      }
    };

    return(<div>
        <div>
    
        <Container>
          <div className="Topic">
              <h2>Hệ thống</h2>
              <h1>QUẢN LÝ XẾP HÀNG</h1>
          </div>
          <div className="Banner">
              <img src={Banner}/>
          </div>
              <div className="container-fluid">
                  <div className="col-12">
                      <div className="px-3">
                          <div className='web-icon-1'>
                              <img  src={logo}/>
                          </div>
                          <div className="form-group">
                              <ul className="tendangnhap">
                                  <label>Tên đăng nhập</label>
                                  <input type="email" className="form-control" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Nhập tên đăng nhập"/>
                              </ul> 
                              <ul className="matkhau">
                                  <label>Mật khẩu</label>
                                  <input type="password" className="form-control" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Nhập mật khẩu" />
                              </ul>
                              {error && <span>Sai mật khẩu hoặc tên đăng nhập</span>}
                              <ul className="quenmatkhau">
                                  <label><a href="#">Quên mật khẩu?</a></label>
                              </ul>
                          </div>
                              <button onClick={() =>loginUser(email, password)}  type="submit" className="nutdangnhap">Đăng nhập</button>

                      </div>
                  </div>

              </div>
        </Container>
  
    </div>
              
    </div> 
    
    );
}

export default Login
