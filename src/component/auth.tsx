import Banner from "../image/Banner.png"
import logo from "../image/logo.png"
import { collection, addDoc} from "firebase/firestore";
import { db, auth } from "../firebase";
import { getFirestore } from 'firebase/firestore'

import { createUserWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from 'react';

const Login = () => {
    const usersCollectionRef = collection(db, "users");
    const [newEmail, setNewEmail] =useState("");
    const [newPassword, setNewPassword] =useState("");

    const createAccount = async (email:string, password:string) =>{
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const user = res.user;
            await addDoc(usersCollectionRef, {email: newEmail, authProvider: "local"})
        } catch (err: any) {
            console.error(err);
            alert(err.message);
        }
    
    }
    const login = () => {
        createAccount(newEmail, newPassword);
        };
    return(<div>
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
                                    <input type="email" className="form-control" placeholder="Nhập tên đăng nhập" onChange={(e)=>setNewEmail(e.target.value)}/>
                                </ul> 
                                <ul className="matkhau">
                                    <label>Mật khẩu</label>
                                    <input type="password" className="form-control" placeholder="Nhập mật khẩu" onChange={(e)=>setNewPassword(e.target.value)}/>
                                </ul>
                                <ul className="quenmatkhau">
                                    <label><a href="#">Quên mật khẩu?</a></label>
                                </ul>
                            </div>
                                <button onClick={login} type="submit" className="nutdangnhap">Đăng nhập</button>
                        </div>
                    </div>

                </div>
           
    </div> );
}

export default Login

