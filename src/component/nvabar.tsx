import logo from "../image/logo.png"
import Dashboard from "../image/Dashboard.png"
import Thietbi from "../image/Thietbi.png"
import Dichvu from "../image/Dichvu.png"
import Capso from "../image/Capso.png"
import Baocao from "../image/Baocao.png"
import Caidat from "../image/Caidat.png"
import Dangxuat from "../image/Dangxuat.png"
import List from "../image/List.png"

import {NavLink} from "react-router-dom"


const Nvabar = () => {
    return (<div>
      
          <div className="list-menu">
            <div className='web-icon'>
                <img src={logo}/>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <NavLink className="list-link Dashboard" to="/dashboard">
                        <img className="i-element" src={Dashboard}/>
                        Dashboard
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="list-link Thiet-bi" to="/thietbi">
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
                <li className="nav-item">
                    <NavLink className="list-link Cai-dat" to="/caidat">
                        <img className="i-element" src={Caidat}/>

                        Cài đặt hệ thống
                        <img className="i-list" src={List}/>

                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="list-link Dang-xuat" to="/dangxuat">
                        <img className="i-element" src={Dangxuat}/>
                        Đăng xuất
                    </NavLink>
                </li>
            
            </ul>
            
          </div>

            
    </div>);
} 

export default Nvabar