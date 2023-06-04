import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import schema from "../../../schema";

import styles from "./ChatAside.module.scss";

export default function ChatAside({ onSubmit }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

    return (
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.controls}>
                    <p className={styles.mainText}>Chats</p>
                    <button className={styles.addToChatBtn}>+</button>
                </div>
                <input className={styles.textField} placeholder="Create chat" {...register("phone")} />
                <p>{errors.phone?.message}</p>
            </form>
        </div>
    );
}
