class MessageData {
    constructor(data, incomming) {
        this.name = data.body.senderData.senderName ? data.body.senderData.senderName : "noname";
        this.text = data.body.messageData?.extendedTextMessageData ? data.body.messageData.extendedTextMessageData.text : data.body.messageData.textMessageData.textMessage;
        this.time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        this.incomming = incomming;
    }
}

export const getFormatedData = ({ data }) => {
    switch (data.body.messageData.typeMessage) {
        case "extendedTextMessage":
            return new MessageData(data, false);
        case "textMessage":
            return new MessageData(data, true);
        default:
            break;
    }
};

export const getFormatedPhone = (numb) => {
    if (numb.includes("+7")) {
        return numb.replace("+7", "");
    }

    if (numb.split("")[0] === "7") {
        const numbs = numb.split("");
        numbs.splice(0, 1);
        return numbs.join("");
    }

    return numb;
};
