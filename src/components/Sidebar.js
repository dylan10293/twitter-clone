import React, { Component } from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";

import { Button } from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

export class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                {/* Twitter icon */}
                <TwitterIcon className="sidebar__twitterIcon" />

                {/* Sidebar Option */}
                <SidebarOption active Icon={HomeIcon} title="Home" />
                <SidebarOption Icon={SearchIcon} title="Explore" />
                <SidebarOption
                    Icon={NotificationsNoneIcon}
                    title="Notifications"
                />
                <SidebarOption Icon={MailOutlineIcon} title="Messages" />
                <SidebarOption Icon={BookmarkBorderIcon} title="Bookmarks" />
                <SidebarOption Icon={ListAltIcon} title="Lists" />
                <SidebarOption Icon={PermIdentityIcon} title="Profile" />
                <SidebarOption Icon={MoreHorizIcon} title="More" />

                {/* Tweet Button */}
                <Button variant="outlined" className="sidebar__tweet" fullWidth>
                    Tweet
                </Button>
            </div>
        );
    }
}

export default Sidebar;
