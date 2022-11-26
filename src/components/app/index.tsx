import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Link from '../../util/link';

import { Home } from "../home";
import { NotFound } from "../notfound";

import './index.scss'

export const _App = () => {
    return (
        <div className="page">
            <nav className={"navbar navbar-expand-lg"} id="page-nav">
                <div className="container-fluid">
                    <Link class="navbar-brand" href="/" text="Home"></Link>
                    <button className={"navbar-toggler"} type={"button"} data-bs-toggle={"collapse"} data-bs-target={"#navb"}>
                        <span className={"navbar-toggler-icon"}></span>
                    </button>
                    <div className={"collapse navbar-collapse"} id={"navb"}>
                        <ul className={"navbar-nav me-auto mb-2 mb-lg-0"}>
                            <li className={"nav-item"}>
                                <Link class="nav-link" href="/link" text="A Link"></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="page-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            <div className={"text-center"} id={"page-footer"} style={{ marginBottom: 0 }}>
                <footer className="py-3 my-4">
                    <p className="border-bottom pb-3 mb-3">Mackenzie Math Club</p>
                    <a href="https://github.com/wlmacmathclub/website" target={"_blank"} rel={"noreferrer noopener"}>
                        <i className="bi bi-github fa-lg"></i>
                    </a>
                </footer>
            </div>
        </div>
    );
}

export const App = () => {
    return (
        <BrowserRouter>
            <_App />
        </BrowserRouter>
    );
}