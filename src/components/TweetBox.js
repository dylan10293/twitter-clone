import React, { Component } from "react";
import { Avatar, Button } from "@material-ui/core";

export class TweetBox extends Component {
    render() {
        return (
            <div className="tweetBox">
                <form>
                    <div className="tweetBox__input">
                        <Avatar src="https://www.sportsindiashow.com/wp-content/uploads/2019/07/IMG_20190718_021610.jpg" />
                        <input placeholder="Whats happening?" type="text" />
                    </div>
                    <input
                        className="tweetBox__imageInput"
                        placeholder="Enter image URL"
                        type="text"
                    />
                    <Button className="tweetBox__tweetButton">Tweet</Button>
                </form>
            </div>
        );
    }
}

export default TweetBox;
