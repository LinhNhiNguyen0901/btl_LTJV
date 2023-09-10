import React, { useRef, useState } from "react";
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";

const LoginPage = () => {
    const [addclass, setaddclass] = useState("");
    let navigate = useNavigate()

    const Register = (evt) => {
        evt.preventDefault();
        //start section
        // console.log(username,password,email)
        //end section
        setEmail("")
        setPassword("")
        setUsername("")

        setaddclass()
        return navigate("/login")
    }

    const Login = (ev) => {
        
    }
    
    const [user, setUser] = useState({
        "name": "",
        "email": "",
        "pass": "",
        "rePass": "",
        "phone": "",
        "user-role": "",
        "active": ""
    });

    const avatar = useRef();

    const change = (e, field) => {
        setUser(current => {
            return {...current, [field]: e.target.value};
        })
    }
    
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();

    return (
        <div className="main">
            <div className={`container ${addclass}`} id="container">
                <div className="form-container sign-up-container">
                    <Form onSubmit={Register}>
                        <h2 style={{fontWeight: "bold"}}>Create account</h2>
                        <Form.Control value={user.name} onChange={e => change(e, "name")} type="text" placeholder="Name" required />
                        <Form.Control value={user.email} onChange={e => change(e, "email")} type="email" placeholder="Email" required />
                        <Form.Control value={user.phone} onChange={e => change(e, "phone")} type="number" placeholder="Phone numer" required />
                        <Form.Control value={user.password} onChange={e => change(e, "pass")} type="password" placeholder="Password" required />
                        <Form.Control value={user.rePass} onChange={e => change(e, "rePass")} type="password" placeholder="Re enter Password" required />
                        <Form.Control type="file" ref={avatar} placeholder="Avatar" required />
                        <Form.Group>
                            <button className="btn" type="submit" >Sign up</button>
                        </Form.Group>
                    </Form>
                </div>
                <div className="form-container sign-in-container">
                    <form onSubmit={Login}>
                        <h1>Sign in</h1>
                        <input type="text" placeholder="Name" />
                        <input type="password" placeholder="Password" />
                        <Link to="/">
                            <button className="btn">Login</button>
                        </Link>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <button className="btn ghost" onClick={() => setaddclass()}> To Login</button>
                        </div>

                        <div className="overlay-panel overlay-right">
                            <button className="btn ghost" onClick={() => setaddclass("right-panel-active")} >To Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;