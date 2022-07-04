import Banner from "../image/Banner.png"
import logo from "../image/logo.png"
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { Button, Col, Container, Form, Navbar } from "react-bootstrap";
import React, { useContext, useRef, useState } from "react";
import Home from "../component/nvabar"
import {NavLink} from "react-router-dom"

  const Login = () => {
    const user = useContext(AuthContext);

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState(false);

    // const createAccount = async () => {
    //   try {
    //       await auth.createUserWithEmailAndPassword(
    //       emailRef.current!.value,
    //       passwordRef.current!.value
    //     );
    //   } catch (error) {
    //       setError(true);
    //   }
    // };

    const signIn = async () => {
      try {
        await auth.signInWithEmailAndPassword(
          emailRef.current!.value,
          passwordRef.current!.value
        );
      } catch (error) {
          setError(true);
      }
    };

   
    return(<div>
        <div>
     
      {!user ? (
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
                                    <input type="email" className="form-control" ref={emailRef} placeholder="Nhập tên đăng nhập"/>
                                </ul> 
                                <ul className="matkhau">
                                    <label>Mật khẩu</label>
                                    <input type="password" className="form-control" ref={passwordRef}  placeholder="Nhập mật khẩu" />
                                </ul>
                                {error && <span>Sai mật khẩu hoặc tên đăng nhập</span>}
                                
                                <ul className="quenmatkhau">
                                    <label><a href="#">Quên mật khẩu?</a></label>
                                </ul>
                            </div>
                                <button onClick={signIn} type="submit" className="nutdangnhap">Đăng nhập</button><br />
                                {/* <button onClick={createAccount} type="submit" className="nutdangky">Đăng ký</button> */}

                        </div>
                    </div>

                </div>
        </Container>
      ) : (
        <div>
            <Home/>
        </div>
        
      )}
    </div>
    
                
           
    </div> 
    
    );
}

export default Login
