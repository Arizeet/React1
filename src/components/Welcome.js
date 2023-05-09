//Class Components


import React, {Component} from "react";

class Welcome extends Component{
    render(){
        const {name, title} = this.props
        // const {state1, state2} = this.state
        return <h1>By Class Component {name} {title} </h1>
    }
}

export default Welcome