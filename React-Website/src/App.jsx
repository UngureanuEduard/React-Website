import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Common/Nav";
import Logo from "./Logo/Logo";
import UsersIndex from "./Users/UsersIndex";
import { Outlet } from "react-router-dom";
import UserPost from "./Users/UserPost";
import React from "react";
import UsersAdminIndex from './Users/UserAdminIndex';
import UserUpdate from './Users/UserUpdate';
import UserNew from './Users/UserNew';

const App = () => {
    const [id, setId] = React.useState(null);
    const [currentPage, setcurrentPage] = React.useState("");
    const updateId = (newId) => {
        setId(parseInt(newId, 10));
    };

    const updatePage = (newPage) => {
        setcurrentPage(newPage);
    };

    return (
        <Router>
            <div className="appStyles">
                <div className="header">
                    <Logo />
                    <Nav updatePage={updatePage} updateId={updateId} />
                </div>
                <div className="content">
                    <div className="PageId">
                        Page: {currentPage}
                        {isNaN(id) ? null : id}
                    </div>

                    <Routes >
                        <Route path="/" element={<Outlet />}>
                            <Route index element={<UsersIndex updateId={updateId} />} />
                            <Route path=":id" element={<UserPost id={parseInt(id, 10)} />} />
                        </Route>
                        <Route path="/admin" element={<Outlet />}>
                            <Route index element={<UsersAdminIndex updateId={updateId} />} />
                            <Route path=":id" element={<UserUpdate id={parseInt(id, 10)} updatePage={updatePage} updateId={updateId} />} />
                            <Route path="new" element={<UserNew />} />
                        </Route>
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
