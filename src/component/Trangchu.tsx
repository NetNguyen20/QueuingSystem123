import { auth, db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import logo from "../image/logo.png"
import Nvabar from "../component/nvabar"
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { query, collection, getDocs, where } from "firebase/firestore";

const TrangChu = () => {
    const [user, loading, error] = useAuthState(auth);
    const [email, setEmail] = useState("");
    const [username, setUserName] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState<number>(0);
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
            setPhone(data.phone);
            setPassword(data.password);
            setUserName(data.username);
            setEmail(data.email);

        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/Page-login");
        fetchUserName();
    }, [user, loading]);


    return (<div>
        <div>
            <Nvabar />
            <div className="tieude">
                <p>Thông tin cá nhân</p>
            </div>
        </div>
        <div className="informationUser">
            <ul className="detail">
                <img className="anhdaidien" src={logo} />
                <div className="hovaten">
                    <p>{name}</p>
                </div>
                <div className="tennguoidung">
                    <p>Tên người dùng</p><br />
                    <form action="">{name}</form>
                </div>
                <li className="tennguoidung1">
                    <p>Tên đăng nhập</p>
                    <form action="">{username}</form>
                </li>
                <li className="tennguoidung2">
                    <p>Số điện thoại</p>
                    <form action="">{phone}</form>
                </li>
                <li className="tennguoidung3">
                    <p>Mật khẩu</p>
                    <form action="">{password}</form>
                </li>
                <li className="tennguoidung4">
                    <p>Email</p>
                    <form action="">{email}</form>
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