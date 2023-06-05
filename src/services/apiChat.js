import axios from "axios";
axios.defaults.baseURL = "https://api.green-api.com/";

export const sendMsg = async (crds, numb, text) => {
    const [id, token] = crds;
    await axios.post(`waInstance${id}/sendMessage/${token}`, {
        chatId: `${numb}@c.us`,
        message: text,
    });
};

export const getMsg = async (crds) => {
    const [id, token] = crds;
    const response = await axios.get(`waInstance${id}/receiveNotification/${token}`);
    return response;
};

export const delNot = async (crds, numb) => {
    const [id, token] = crds;
    await axios.delete(`waInstance${id}/deleteNotification/${token}/${numb}`);
};
