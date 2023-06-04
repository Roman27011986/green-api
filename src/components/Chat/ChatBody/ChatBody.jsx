import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

import { sendMsg, getMsg, delNot } from "../../../services/apiChat";
import { getFormatedData } from "../../../helpers/getFormatedData";

import styles from "./ChatBody.module.scss";

export default function ChatBody({ phoneNumber }) {
    const [credentials, setCredentials] = useState(null);
    const [messages, setMessages] = useState([]);
    const textFieldRef = useRef(null);
    const { register, reset } = useForm({ mode: "onChange" });
    const location = useLocation();

    useEffect(() => {
        const crds = JSON.parse(location.state.crds);
        setCredentials(crds);
        if (phoneNumber) {
            subscribe();
            textFieldRef.current.lastChild.focus();
        }
    }, [phoneNumber]);

    const onSubmit = (e) => {
        if (e.key === "Enter" && e.shiftKey === false) {
            e.preventDefault();
            sendMsg(credentials, phoneNumber, e.target.value);
            reset();
        }
    };

    const subscribe = async () => {
        try {
            const response = await getMsg(credentials);
            await delNot(credentials, response.data.receiptId);
            const data = getFormatedData(response);
            setMessages((prev) => [...prev, data]);
            subscribe();
        } catch (error) {
            setTimeout(() => {
                subscribe();
            }, 500);
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.messagesList}>
                {messages.map((message, i) => (
                    <div key={message.time + i} className={`${message.incomming ? [styles.messagesListItem, styles.incomming].join(" ") : styles.messagesListItem}`}>
                        {message.text}
                        <span className={styles.time}>{message.time}</span>
                    </div>
                ))}
            </div>

            <div></div>

            <form ref={textFieldRef} className={`${phoneNumber ? styles.form : styles.disabled}`}>
                <textarea className={styles.textField} type="text" {...register("msg")} onKeyDown={onSubmit} />
            </form>
        </div>
    );
}
