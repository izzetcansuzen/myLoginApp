import {useState} from "react";
import FormStatus from "./components/FormStatus.jsx";

export default function App(){
    return (
        <div className="container">
            <FormStatus />
            <form action="" method="post">
                <div className="container_form">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="SENİ" id="email" className="input"/>
                </div>
                <div className="container_form">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="ÇOOOOOOKK" id="password" className="input"/>
                </div>
                <div className="container_form">
                    <label htmlFor="password_verification">Password Verification</label>
                    <input type="password" placeholder="SEVİYORUMMMM" id="password_verification" className="input"/>
                </div>
                <div className="container_form container_checkbox">
                    <input type="checkbox" id="isAccepted" className="input_checkbox"/>
                    <label htmlFor="isAccepted">Accept Terms</label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}