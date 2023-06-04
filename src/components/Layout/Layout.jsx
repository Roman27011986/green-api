import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

import routes from "../../routes";

export default function Layout() {
    const navigate = useNavigate();

    useEffect(() => {
        const crds = localStorage.getItem("credentials");

        if (crds) {
            return navigate(routes.chat, { state: { crds } });
        } else {
            return navigate(routes.auth);
        }
    }, [navigate]);

    return <Outlet />;
}
