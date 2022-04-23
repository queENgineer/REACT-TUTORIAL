import React, { Component } from 'react';

export default class Test extends Component {
   constructor(props){
        super(props);
        this.state={
            a:10
        }
        console.log("Constructor");
    }
  componentDidMount(){
        console.log("componentDidMount");
//API istekleri burda güncellenir
this.setState({
    a:20

    })
}
componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
}
shouldComponentUpdate(){
    console.log("shouldComponentUpdate");
    return false;
}

    render() {
    console.log("Render");
        //Render içinde state değiştirilemez
        return (
            <div>
                
            </div>
        )
    }
}
