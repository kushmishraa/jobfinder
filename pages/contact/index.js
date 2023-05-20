import Header from "@/component/Header";
import style from '../../styles/contact.module.css'
import React from "react";
import Image from "next/image";

export default function index(){

    const handleMail = () =>{
        window.location.href = "mailto:jobfinder.contactus@gmail.com";
    }
   
    return(
        <div className={style.container}>
           
            <div className="main-header">
            <Header isContact = {true} />
            </div>
            
            <div className={style.heading}>
                <h1>Contact Us</h1>
            </div>
            
            <div className={style.formContainer}>
                <div className={style.form}>
                        <div className={style.formTopRow}>
                            <input type="text" placeholder="name"></input>
                            <input type="text" placeholder="Age"></input>
                        </div>
                        <input type="email" placeholder="email"></input>
                        <textarea rows={20} placeholder="Message..!"></textarea>
                        <input type="submit" value="submit"></input>
                </div>
            </div>
           <div className={style.contactAction}>
                <div className={style.actions}>
                <div className={style.emailUs}>
                    <Image
                    src={'/emailicon.png'}
                    width={50}
                    height={50}
                    alt="email us" />
                </div>
                <div className={style.contactUs}>
                    <Image
                    src={'/callIcon.png'}
                    width={50}
                    height={50}
                    alt="call us !"

                    />
                </div>
                </div>                
            </div>
        </div>
    )
}