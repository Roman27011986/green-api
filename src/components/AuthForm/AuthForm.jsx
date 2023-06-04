import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import routes from "../../routes";

import styles from "./AuthForm.module.scss";

export default function AuthForm() {
    const navigate = useNavigate();

    const { register, handleSubmit, reset } = useForm({ mode: "onChange" });

    const onSubmit = (data) => {
        const { idInstance, apiTokenInstance } = data;

        if (idInstance && apiTokenInstance) {
            const crds = JSON.stringify([idInstance, apiTokenInstance]);
            localStorage.setItem("credentials", crds);
            return navigate(routes.chat, { state: { crds } });
        }

        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <input className={styles.textField} type="text" placeholder="idInstance" {...register("idInstance")} />
            <input className={styles.textField} type="text" placeholder="apiTokenInstance" {...register("apiTokenInstance")} />
            <button className={styles.btn}>Send</button>
        </form>
    );
}
