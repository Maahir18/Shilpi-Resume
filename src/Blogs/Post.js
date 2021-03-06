import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import './Post.css'

import {postarray} from './postarray'

export default function Post(props) {
    const postlist = postarray.map((postofarray, i)=>{
        return (
        <NavLink key = {postofarray.id} to={`/Blogs/${postarray[i].id}`} style={{ textDecoration: 'none'}}>
            <div className="side_post">
                <h6 className="side_post_title">{postofarray.post_title}</h6>
                <img  src={postofarray.Post_img} postofarray={postofarray} alt="img1" />
                <span>{postofarray.posted_on}</span>
            </div>
        </NavLink>
        )
    });

    const[post,setPost] = useState({});
    
    useEffect(()=>{
        const postId = props.match.params.id;
        const post = postarray.find(post=>post.id == postId);
        setPost(post);
    },[props.match.params.id]);

    return (
        <div className="postImageContainer">
            <div className="article">
                <img src = {post.Post_img} alt="image1"/>
                <p>{post.post_content}</p>
            </div>
            <div className="aside">
                {postlist}          
            </div>
        </div>
    )
}
