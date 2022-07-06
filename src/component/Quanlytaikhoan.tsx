import React from "react";
import Nvabar from "../component/nvabar"

const Quanlytaikhoan = () =>{


    return(
        <div>
            <div>
                <Nvabar/>
            </div>
            <div className="danhsachtaikhoan">
                <div className="tendangnhapql"> 
                    <h5>Tên đăng nhập</h5>
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
        </div>
    )
}

export default Quanlytaikhoan