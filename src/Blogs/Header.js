import React,{useState, useEffect} from 'react'
import './Header.css'
import {postarray} from './postarray'
import Navigation from '../components/Navigation'
import '../css/Navigation.css'
import EmailButton from '../components/EmailButton'




const Header = (props)=>{
   

    const[post,setPost] = useState({});
    useEffect(()=>{
        const postId = props.match.params.id;
        const post = postarray.find(post=>post.id == postId);
        setPost(post);
    },[props.match.params.id]);

    const[search,setSearch] = useState(false);
    const[EmailBtn,setEmailBtn] = useState(true);
    const submitSearch =(e)=>{
        e.preventDefault();
        alert("Searched");
    }

    const openSearch=()=>{
        if(search){
            setSearch(false);
            setEmailBtn(true);
        }else {
            setSearch(true);
            setEmailBtn(false)
        }
        
    }

    const searchClass = search?'searchInput active': 'searchInput';

   
    return (

           
            <div className = "App-header">
                <Navigation/>
                <div className="container ">
                    <form className="top-style searchForm" onSubmit={submitSearch}>
                        
                            <div className="">
                                <h6>{post.category_name}</h6><br/>
                                <h1  className = "bloggerName">{post.post_title}</h1><br/>
                                <h6>{post.posted_on}</h6><br/>
                            </div>
                            <div className="searchBox">
                                <input type="text" className={searchClass} placeholder="SEARCH"/>
                                <img src={require('../images/search.svg')} alt="SEARCH" onClick={openSearch}/>
                            </div>
                            {EmailBtn?<EmailButton value="POST YOUR BLOG" fromBlog="true" />:''}
                    </form>
                </div>
            </div>        
                
        
        
    )
}


export default Header
