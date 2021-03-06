import React,{Component} from 'react'
import Header from './Header.js'
import Post from './Post.js'



class Blogs extends Component {
    
    render(){
        return (
            <div className="App">
                <Header {...this.props}/>
                <Post {...this.props} />
            </div>
        );
    }
}

export default Blogs;