import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase";
import { updatePassword, sendPasswordResetEmail } from "firebase/auth";

function Reset() {
  return (
    <div className="changepass">
        <h2>Đặt lại mật khẩu</h2>
        <p>Vui lòng nhap</p>
        <input type="text" value={this.state.newPassword} />
    </div>
  );
}
export default Reset;