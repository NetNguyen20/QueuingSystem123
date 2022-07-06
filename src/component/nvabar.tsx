    import logo from "../image/logo.png"
    import Dashboard from "../image/Dashboard.png"
    import Thietbi from "../image/Thietbi.png"
    import Dichvu from "../image/Dichvu.png"
    import Capso from "../image/Capso.png"
    import Baocao from "../image/Baocao.png"
    import Caidat from "../image/Caidat.png"
    import Dangxuat from "../image/Dangxuat.png"
    import List from "../image/List.png"
    import { auth, db } from "../firebase";
    import { useAuthState } from "react-firebase-hooks/auth";
    import { useNavigate } from "react-router-dom";
    import { query, collection, getDocs, where } from "firebase/firestore";


    import {NavLink, useResolvedPath} from "react-router-dom"
    import { useEffect, useState } from "react"
import { signOut } from "firebase/auth"


    const Nvabar = () => {
       
        const [user, loading, error] = useAuthState(auth);
        const [name, setName] = useState("");
        const [phone, setPhone] = useState<number>(0);

        const navigate = useNavigate();
        const fetchUserName = async () => {
          try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
            setPhone(data.phone);
          } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
          }
        };
        useEffect(() => {
          if (loading) return;
          if (!user) return navigate("/");
          fetchUserName();
        }, [user, loading]);
        
        const logout = () => {
            signOut(auth);
          }; 
        return (<div>
            <div className="information">
                <div className="ten">
                    <p>Xin chào<br />{name}</p>
                </div> 
                <div className="tieude">
                    <p>Thông tin cá nhân</p> 
                </div>
            </div>
            <div className="list-menu">
                <NavLink className='web-icon' to="/Page-home">
                    <img src={logo}/>
                </NavLink>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink className="list-link Dashboard" to="/Page-dashboard">
                            <img className="i-element" src={Dashboard}/>
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="list-link Thiet-bi" to="/Page-thietbi">
                            <img className="i-element" src={Thietbi}/>
                            Thiết bị
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="list-link Dich-vu" to="/dichvu">
                            <img className="i-element" src={Dichvu}/>
                            Dịch vụ
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="list-link Cap-so" to="/capso">
                            <img className="i-element" src={Capso}/>
                            Cấp số
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="list-link Bao-cao" to="/baocao">
                            <img className="i-element" src={Baocao}/>
                            Báo cáo
                        </NavLink>
                    </li>
       
                    <ul className="menu">
                        <li>
                            <a className="list-link Cai-dat">
                                <img className="i-element" src={Caidat}/>
                                Cài đặt hệ thống
                                <img className="i-list" src={List}/>
                                
                            </a>
                            <ul>
                                <li><a href="/Page-quanly">Quản lý tài khoản</a></li>
                                <li><a href="#">Quản lý vai trò</a></li>
                                <li><a href="#">Nhật ký người dùng</a></li>
                            </ul>
                        </li>
                    </ul>

                    <li className="nav-item">
                        
                            <NavLink  className="list-link Dang-xuat" onClick={logout} to="">
                                <img className="i-element" src={Dangxuat}/>
                                Đăng xuất
                            </NavLink>
                    </li>
                </ul>

                
                
            </div>
      
        </div>);
    } 


    export default Nvabar