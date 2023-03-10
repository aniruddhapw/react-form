import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Address extends Component{
    handleSubmit(event){
        alert("Thank you! Successfully Submitted");
        event.preventDefault();
    }
    render() {
        return(
            <div className='main-container'>
                <Link to="/address"><button className="a_btn">Address</button></Link>
                <form onSubmit={this.handleSubmit}>
                  <label>
                      <input type="text" placeholder="Country"/>
                  </label>    
                  <br/><br/>
                  <label>
                      <input type="text" placeholder="City"/>
                  </label>
                   <br/><br/>
                  <label>
                      <input type="number" placeholder="Pincode"/>
                  </label>
                   <br/><br/>
                  <label>
                      <input type="text" placeholder="Address"/>
                  </label>
                  <br/><br/>
                  <button value="submit">Submit</button>
                </form> 
            </div>
        )  
    }
}