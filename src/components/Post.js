import React from "react";
import { Avatar } from "@material-ui/core";
import {
    ChatBubbleOutlineOutlined,
    FavoriteBorder,
    Publish,
    RepeatOutlined,
    VerifiedUserRounded,
} from "@material-ui/icons";

const Post = ({
    displayName,
    username,
    verified,
    timestamp,
    text,
    image,
    avatar,
}) => {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://avatarfiles.alphacoders.com/177/177503.png" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Hinata Something
                            <span className="post_headerSpecial">
                                <VerifiedUserRounded className="post__badge" />
                                @theRealHinata
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Blah Blah jump something jump</p>
                    </div>
                    <img
                        alt="Post GIF"
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/67401945-34fc-46b8-8e8f-1982847277d4/ddba22b-2fad9d00-1d3f-4ec8-a65d-199a09dfa4e1.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNjc0MDE5NDUtMzRmYy00NmI4LThlOGYtMTk4Mjg0NzI3N2Q0XC9kZGJhMjJiLTJmYWQ5ZDAwLTFkM2YtNGVjOC1hNjVkLTE5OWEwOWRmYTRlMS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ._-whxwEBEaTLWUvSWL80KTGiwpoy9dSPzXSRhfTAzeM"
                    />
                    <div className="post__footer">
                        <ChatBubbleOutlineOutlined fontSize="small" />
                        <RepeatOutlined fontSize="small" />
                        <FavoriteBorder fontSize="small" />
                        <Publish fontSize="small" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
