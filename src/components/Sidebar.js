import React, { Component } from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";

import { Button } from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";

export class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                {/* Twitter icon */}
                <TwitterIcon />

                {/* Sidebar Option */}
                <SidebarOption active Icon={HomeIcon} title="Home" />
                <SidebarOption Icon={SearchIcon} title="Explore" />
                <SidebarOption
                    Icon={NotificationsNoneIcon}
                    title="Notifications"
                />

                {/* Tweet Button */}
                <Button variant="outlined" className="sidebar__tweet" fullWidth>
                    Tweet
                </Button>
            </div>
        );
    }
}

export default Sidebar;
