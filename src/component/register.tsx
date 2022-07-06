import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { addDoc, collection } from "firebase/firestore"
import { createUserWithEmailAndPassword } from "firebase/auth";



const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState<number | string>(0);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const createUser = async (username: string, name: string, email: string, password: string, phone: number | string) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        username,
        name,
        authProvider: "local",
        email,
        phone,
        password

      });
    } catch (err: any) {
      console.error(err);
      alert(err.message);
    }
  };
  const register = () => {
    if (!name) alert("Please enter name");
    createUser(username, name, email, password, phone);
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate('/Page-home', { replace: true });
  }, [user, loading]);
  return (
    <div className="register">
      <div className="register__container">
        <input
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
        </button>

        <div>
          Already have an account? <Link to="/Page-login">Login</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Register;