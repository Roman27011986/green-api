import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import routes from "./routes";

// pages

const AuthPage = lazy(() => import("./pages/AuthPage/AuthPage" /* webpackChunkName: "AuthPage" */));
const ChatPage = lazy(() => import("./pages/ChatPage/ChatPage" /* webpackChunkName: "ChatPage" */));

export default function App() {
    return (
        <Suspense fallback={<p>Загружаем...</p>}>
            <Routes>
                <Route path={routes.auth} element={<Layout />}>
                    <Route path={routes.auth} element={<AuthPage />} />
                    <Route path={routes.chat} element={<ChatPage />} />
                </Route>
            </Routes>
        </Suspense>
    );
}
