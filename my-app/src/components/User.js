import React, { Component } from 'react';
import PropTypes from "prop-types";
import UserConsumer from '../context';

class User extends Component {

    state = {
        isVisible : false
    }

    onClickEvent=(e)=>{
       this.setState({
           isVisible : !this.state.isVisible
       })
    }

    onDeleteUser=(dispatch,e)=>{
         const {id}=this.props;
         dispatch({type: "DELETE_USER",payload: id});
    }
 /*   componentWillUnmount(){
        console.log("componentWillUnmount");
    }*/
    render() {

        const{name,department,salary}=this.props;
        const{isVisible}=this.state;

        return (<UserConsumer>
{
    value =>{
        const {dispatch} =value;
        
        return (
            <div className="col-md-8 mb-4">
            
                <div className="card" style={isVisible?{backgroundColor:"#fed4eb",color:"white"} : null}>
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="d-inline" onClick={this.onClickEvent}>{name}</h4>
                        <i  className="far fa-trash-alt" onClick={this.onDeleteUser.bind(this,dispatch)} style ={{cursor: "pointer"}}></i>
                    </div>
                    {
                        isVisible? <div className="card-body" >
                        <p className="card-text">Department :{department}</p>

                        <p className="card-text">Salary: {salary}</p>
                       
                    </div>:null
                    }
                    
                </div>
            </div>
        )
    }
}
        </UserConsumer>)

    }
}

User.propTypes = {
    name : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,
    id : PropTypes.string.isRequired
}

export default User;