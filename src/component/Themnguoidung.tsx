import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp, Timestamp } from "firebase/firestore"
import { createUserWithEmailAndPassword } from "firebase/auth";
import Nvabar from "../component/nvabar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'react-css-dropdown/dist/index.css'
import caret from "../image/caret.png"


const Themnguoidung = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [vaitro, setVaitro] = useState("");
    const [tinhtrang, setTinhtrang] = useState("");
    const [phone, setPhone] = useState<number | string>(0);
    const [user, loading, error] = useAuthState(auth);        
    const [isActive, setIsActive] = useState(false);
    const [isActive1, setIsActive1] = useState(false);
    const options1 = ["Kế toán", "Quản lý", "Admin"];
    const options2 = ["Tất cả", "Ngừng hoạt động", "Hoạt động"];

    const navigate = useNavigate();
    const createUser = async (username: string, name: string, email: string, password: string, phone: number | string, vaitro:string, tinhtrang:string) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const user = res.user;
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                username,
                name,
                authProvider: "local",
                email,
                timeStamp: serverTimestamp(),
                vaitro,
                tinhtrang,
                phone,
                password

            });
        } catch (err: any) {
            console.error(err);
            alert(err.message);
        }
    };
    const themtaikhoan = () => {
        if (!name) alert("Please enter name");
        createUser(username, name, email, password, phone, vaitro, tinhtrang);
    };
    useEffect(() => {
        if (loading) return;
        if (user) navigate('', { replace: true });
    }, [user, loading]);
    return (<div>
        <div>
            <Nvabar />
            <div className="tieude">
                <p>Thông tin cá nhân</p>
            </div>
        </div>
        <div className="Themnguoidung">
            <h5>Thông tin tài khoản</h5>
            <div className="hotennd">
                <p>Họ tên</p>
                <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" className="form-control" placeholder="Nhập họ tên"></input>
            </div>
            <div className="tendangnhapnd">
                <p>Tên đăng nhập</p>
                <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-control" placeholder="Nhập tên đăng nhập"></input>
            </div>
            <div className="sodienthoaind">
                <p>Số điện thoại</p>
                <input onChange={(e) => setPhone(e.target.value)} value={phone} type="text" className="form-control" placeholder="Nhập số điện thoại"></input>
            </div>
            <div className="matkhaund">
                <p>Mật khẩu</p>
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="text" className="form-control" placeholder="Nhập mật khẩu"></input>
            </div>
            <div className="nhapmatkhaund">
                <p>Nhập lại mật khẩu</p>
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="text" className="form-control" placeholder="Nhập lại mật khẩu"></input>
            </div>
            <div className="emailnd">
                <p>Email</p>
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" className="form-control" placeholder="Nhập email"></input>
            </div>

            <div className="vaitrond">
                <p>Vai trò</p>
                <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
                    {vaitro}
                    <img src={caret} />
                </div>
                {isActive && (
                    <div className="dropdown-content">
                        {options1.map((option) =>(
                            <div onClick={(e) => {setVaitro(option); setIsActive(false);}} className="dropdown-item">{option}</div>
                            )
                        )}
                    </div>
                )}
                {/* <input onChange={(e) => setVaitro(e.target.value)} value={vaitro} type="text" className="form-control" placeholder="Nhập vai trò"></input> */}
            </div>
            <div className="tinhtrangnd">
                <p>Tình trạng</p>
                <div className="dropdown-btn" onClick={(e) => setIsActive1(!isActive1)}>
                    {tinhtrang}
                    <img src={caret} />

                </div>
                {isActive1 && (
                    <div className="dropdown-content">
                        {options2.map((option1) =>(
                            <div onClick={(e) => {setTinhtrang(option1); setIsActive1(false);}} className="dropdown-item">{option1}</div>
                            )
                        )}
                    </div>
                )}
                {/* <input onChange={(e) => setTinhtrang(e.target.value)} value={tinhtrang} type="text" className="form-control" placeholder="Nhập tình trạng"></input> */}
            </div>

        </div>
        <div className="nutchon">
            <button className="huybo">
                <p>Hủy bỏ</p>
            </button>
            <button onClick={themtaikhoan} className="them">
                <p>Thêm</p>
            </button>
        </div>
    </div>


    );
}
export default Themnguoidung;