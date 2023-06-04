import axios from "axios";
axios.defaults.baseURL = "https://api.green-api.com/";

export const sendMsg = async (crds, numb, text) => {
    const [id, token] = crds;
    const trendMovies = await axios.post(`waInstance${id}/sendMessage/${token}`, {
        chatId: `${numb}@c.us`,
        message: text,
    });
    console.log("sendMsg", trendMovies);
    return trendMovies;
};

export const getMsg = async (crds) => {
    const [id, token] = crds;
    const trendMovies = await axios.get(`waInstance${id}/receiveNotification/${token}`);

    return trendMovies;
};

export const delNot = async (crds, numb) => {
    const [id, token] = crds;
    const trendMovies = await axios.delete(`waInstance${id}/deleteNotification/${token}/${numb}`);

    return trendMovies;
};
