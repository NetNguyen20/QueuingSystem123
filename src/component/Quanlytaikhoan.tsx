import Nvabar from "../component/nvabar"
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { query, collection, getDocs, where } from "firebase/firestore";
import { auth, db } from "../firebase";
import React, { useEffect, useState } from "react";
import Add from "../image/Add.png"

interface IUser {
    user:{
      id:string,
      email:string,
      name:string,
      phone:number,
      username:string,
      vaitro: string,
      tinhtrang:string
    }[]
  }
const Quanlytaikhoan = () => {
    const [users, setUsers] = useState<IUser["user"]>([]);
    const usersCollectionRef = collection(db, "users");


    useEffect( () => {

        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef)
            console.log(data.docs);
            setUsers(data.docs.map((doc: any) => ({...doc.data(), id: doc.id})))
        };

        getUsers();

    }, []);
    
    return (
        <div style={{ top: "0px"}}>
            <Nvabar/>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{width: "150px",height: "49px"}}> Tên đăng nhập</th>
                        <th style={{width: "166px",height: "49px"}}> Họ tên</th>
                        <th style={{width: "130px",height: "49px"}}> Số điện thoại</th>
                        <th style={{width: "255px",height: "49px"}}> Email</th>
                        <th style={{width: "114px",height: "49px"}}> Vai trò</th>
                        <th style={{width: "193px",height: "49px"}}> Trạng thái hoạt động</th>
                        <th style={{width: "99px",height: "49px"}}> </th>

                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(users).map((id, index) => {
                            return (
                                    <tr>
                                        <td>{users[id].username}</td>
                                        <td>{users[id].name}</td>
                                        <td>{users[id].phone}</td>
                                        <td>{users[id].email}</td>
                                        <td>{users[id].vaitro}</td>
                                        <td>{users[id].tinhtrang}</td>
                                        <td><NavLink to={"/capnhat"}>Cập nhậ</NavLink>t</td>
                                    </tr>
                            );
                        }
                        )
                    }
                </tbody>
            </table>

    </div>
        
    );
}

export default Quanlytaikhoan
