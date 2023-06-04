import { useState } from "react";

import ChatAside from "../ChatAside";
import ChatBody from "../ChatBody";

import { getFormatedPhone } from "../../../helpers/getFormatedData";

import styles from "./ChatLayout.module.scss";

export default function ChatLayout() {
    const [phoneNumber, setPhoneNumber] = useState(null);

    const handleSubmit = (data) => {
        const { phone } = data;
        const formatedPhoneNumber = getFormatedPhone(phone);
        setPhoneNumber(formatedPhoneNumber);
    };

    return (
        <div className={styles.layout}>
            <ChatAside onSubmit={handleSubmit} />
            <ChatBody phoneNumber={phoneNumber} />
        </div>
    );
}
