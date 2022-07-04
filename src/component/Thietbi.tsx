import React from "react";
import Nvabar from "../component/nvabar"

const Thietbi = () =>{


    return(
        <div>
            <div>
                <Nvabar/>
            </div>
            <div className="danhsachthietbi">
                <div className="mathietbi"> 
                    <h5>Mã thiết bị</h5>
                </div>
                <div className="tenthietbi"> 
                    <h5>Tên thiết bị</h5>
                </div>
                <div className="dichiip"> 
                    <h5>Địa chỉ IP</h5>
                </div>
                <div className="trangthai"> 
                    <h5>Trạng thái hoạt động</h5>
                </div>
                <div className="ketnoi"> 
                    <h5>Trạng thái kết nối</h5>
                </div>
                <div className="dichvu"> 
                    <h5>Dịch vụ sử dụng</h5>
                </div>
                <div className="chitiet"> 
                    <h5>.</h5>
                </div>
                <div className="capnhat"> 
                    <h5>.</h5>
                </div>
                
            </div>
        </div>
    )
}

export default Thietbi