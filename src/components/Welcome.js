//Class Components


import React, {Component} from "react";

class Welcome extends Component{
    render(){
        return <h1>By Class Component {this.props.name} {this.props.title} </h1>
    }
}

export default Welcome