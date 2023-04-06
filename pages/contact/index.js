import Header from "@/component/Header";
import style from '../../styles/contact.module.css'
import React from "react";

export default function index(){

    const handleMail = () =>{
        window.location.href = "mailto:jobfinder.contactus@gmail.com";
    }
   
    return(
        <div className={style.container}>
            <div className="main-header">
            <Header isContact = {true} />
            </div>
            <div className="contact-links">
                <div className={style.contactGmail}>
                    <div className="gmail-heading">
                    <h2>For any queries please Mail Us </h2>
                    </div>
                    <div className={style.gmailButton}>
                        <button onClick={handleMail} className={style.btn3}><span>Mail us</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}