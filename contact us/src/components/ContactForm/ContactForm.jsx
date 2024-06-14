import styles from "./ContactForm.module.css"
import Button from "../Button/Button"
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { useState } from "react";

export const ContactForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")

    const onSubmit = (event) => {
        event.preventDefault();

        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);

        // console.log(event.target[0].value);
        // console.log(event.target[1].value);
        // console.log(event.target[2].value);
    }

  return (
    <section className={`${styles.container}`}>
       <div className={styles.contact_form}>
            <div className={styles.top_button}>
                <Button text=" Via support Chat" icon={<MdMessage fontSize="24px" />} />
                <Button text=" Via Call" icon={<IoMdCall fontSize="24px"/>} />
            </div>
            <Button isOutline={true} text=" Via Email Form" icon={<IoIosMail fontSize="24px"/>} />
            
            <form onSubmit={onSubmit}>
                <div className={styles.form_control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="text">Text</label>
                    <textarea name="text" rows="10" />
                </div>
                <div style={{
                    display:"flex",
                    justifyContent:"center"
                }}>
                    <Button text="Submit" />
                    
                </div>

                <div>
                    {name + " " + email + " " + text}
                </div>
               
            </form>

       </div>
       <div className="styles.contact_image">
                <img src="./images/contact.svg" alt="" />
       </div>
    </section>
  )
}
