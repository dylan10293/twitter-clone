import React from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";

import "./layout/layout.scss";

const App = () => {
    return (
        <div className="app">
            <Sidebar />
            {/* Sidebar */}
            <Feed />
            {/* Feed */}
            <Widgets />
            {/* Widgets */}
        </div>
    );
};

export default App;
