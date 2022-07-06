import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp, Timestamp } from "firebase/firestore"
import { createUserWithEmailAndPassword } from "firebase/auth";
import Nvabar from "../component/nvabar";
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { Dropdown } from "react-bootstrap";
import { timeStamp } from "console";

const Themnguoidung = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [vaitro, setVaitro] = useState("");
    const [tinhtrang, setTinhtrang] = useState("");
    const [phone, setPhone] = useState<number | string>(0);
    const [user, loading, error] = useAuthState(auth);

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
            {/* <input
            type="text"
            className="register__textBox"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="User Name"
            />
            <input
            type="text"
            className="register__textBox"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            />
            <input
            type="number"
            className="register__textBox"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Full Name"
            />
            <input
            type="email"
            className="register__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
            />
            <input
            type="password"
            className="register__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            />
            <button className="register__btn" onClick={register}>
            Register
            </button> */}

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
                <input onChange={(e) => setVaitro(e.target.value)} value={vaitro} type="text" className="form-control" placeholder="Nhập vai trò"></input>
            </div>
            <div className="tinhtrangnd">
                <p>Tình trạng</p>
                <input onChange={(e) => setTinhtrang(e.target.value)} value={tinhtrang} type="text" className="form-control" placeholder="Nhập tình trạng"></input>
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