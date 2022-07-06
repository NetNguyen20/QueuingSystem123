import Nvabar from "../component/nvabar"
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { query, collection, getDocs, where } from "firebase/firestore";
import { auth, db } from "../firebase";
import React, { useEffect, useState } from "react";
import Add from "../image/Add.png"

const Quanlytaikhoan = () => {
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


    return (
        <div>
            <div>
                <Nvabar />
                <div className="tieude">
                    <p>Thông tin cá nhân</p>
                </div>
            </div>
            <div className="danhsachtaikhoan">
                <div className="tendangnhapql">
                    <h5>Tên đăng nhập</h5><br />
                    <p>{name}</p>
                </div>
                <div className="hoten">
                    <h5>Họ tên</h5>
                </div>
                <div className="dienthoai">
                    <h5>Số điện thoại</h5>
                </div>
                <div className="email">
                    <h5>Email</h5>
                </div>
                <div className="vaitro">
                    <h5>Vai trò</h5>
                </div>
                <div className="trangthaiql">
                    <h5>Trạng thái hoạt động</h5>
                </div>
                <div className="capnhatql">
                    <h5>.</h5>
                </div>

            </div>
            <NavLink className="themtaikhoan" to="/Page-nguoidung">
                <img src={Add} />
                <p>Thêm tài khoản</p>
            </NavLink>
        </div>
    )
}

export default Quanlytaikhoan