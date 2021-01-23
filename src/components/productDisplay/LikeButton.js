import React from 'react';
import Heart from 'react-feather/dist/icons/heart';
 
class LikeButton extends React.Component{
    constructor(){
        super();
 
        this.state = {
            liked: false
        }
    }
 
    like(){
        this.setState({liked: !this.state.liked})
    }
 
    render(){
        let buttonClass = this.state.liked ? "notLiked" : "liked";
 
        return (
            <Heart className= {buttonClass + " rightBtn"} onClick={() => {this.like()}}/>
        )
    }
}
 
export default LikeButton;