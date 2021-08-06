import { MoreVert } from '@material-ui/icons'
import React from 'react'
import "./post.css"
import {Users} from "../../dummyData"


export default function Post({post}) {

    return (
        <div>
            <div className="post">
                <div className="postWrapper">
                    <div className="postTop">
                        <div className="postTopLeft">
                            <img className="postProfileImg" src={Users.filter((u)=>u.id === post.userId)[0].profilePicture} alt="" />
                            <span className="postUserName">{Users.filter((u)=>u.id === post.userId)[0].username}</span>
                            <span className="postDate">{post.date}</span>
                        </div>
                        <div className="postTopRight">
                            <MoreVert/ >
                        </div>
                    </div>
                    <div className="postCenter">
                        <span className="postText">{post.desc}</span>
                        <img className="postImg" src={post.photo} alt="" />
                    </div>
                    <div className="postBottom">
                        <div className="postBottomLeft">
                            <img className="likeIcon" src="assets/like.png" alt="" />
                            <img className="likeIcon" src="assets/heart.png" alt="" />
                            <span className="postLikeCounter">{post.like} people liked it</span>
                        </div>
                        <div className="postBottomRight">
                            <span className="postCommentTeext">{post.comment} comments</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
