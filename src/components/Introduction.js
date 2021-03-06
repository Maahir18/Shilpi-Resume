import React,{Component} from 'react'

class Introduction extends Component {              //class component
    render (){
        return (
            <div className = "top-style">
                <h1>{this.props.name}</h1><br/>
                <span>shilpisachdeva.wadhwa@gmail.com</span><br/>
                <span>Contact:5149494522</span><br/>
            </div>
        );
    }
}

export default Introduction;


// const Introduction = ({name}) => {              //functional component
//     return (
//         <div className = "top-style">
//             <h1>{name}</h1><br/>
//             <span>shilpisachdeva.wadhwa@gmail.com</span><br/>
//             <span>Contact:5149494522</span><br/>
//         </div>
//     );
// }