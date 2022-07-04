import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import React, { useContext, useRef } from "react";
import logo from "../image/logo.png"
import Nvabar from "../component/nvabar"

const TrangChu = () =>{
    const user = useContext(AuthContext);

    const signOut = async () => {
        await auth.signOut();
    };

    return(<div>
        <div>
            <Nvabar/>
        </div>
        <div className="informationUser">
                    <ul className="detail">
                        <img className="anhdaidien" src={logo}/>
                        <div className="hovaten">
                            <p>Họ và tên</p>
                        </div>
                        <div className="tennguoidung">
                            <p>Tên người dùng</p><br />
                            <form action="">Tên</form>
                        </div>
                        <li className="tennguoidung1">
                            <p>Tên đăng nhập</p>
                            <form action="">Tên</form>
                        </li>
                        <li className="tennguoidung2">
                            <p>Số điện thoại</p>
                            <form action="">Tên</form>
                        </li>
                        <li className="tennguoidung3">
                            <p>Mật khẩu</p>
                            <form action="">Ten</form>
                        </li>
                        <li className="tennguoidung4">
                            <p>Email</p>
                            <form action="">{user?.email}</form>
                        </li>
                        <li className="tennguoidung5">
                            <p>Vai trò</p>
                            <form action="">Tên</form>
                        </li>
                    </ul>
                </div>
    </div>);
    
                

}

export default TrangChu