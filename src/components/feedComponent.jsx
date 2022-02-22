import React from "react";
import { LikeComponent } from "./likeComponent";
import { ReTweetComponent } from "./reTweetComponent";
import { TweetComponent } from "./tweetComponent";

export const FeedComponent = (props) => {
    return(
        <>
            <div>
                <p>feedComponent</p>
            </div>
            <LikeComponent />
            <ReTweetComponent />
            <TweetComponent />
        </>
    )
}
