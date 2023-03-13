import React, { Component } from 'react';

export default class Address extends Component{
    handleSubmit(event){
        alert("Thank you! Successfully Submitted");
        event.preventDefault();
    }
    render() {
        return(
            <div className='main-container'>
            <div className="content">
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
                  <button className='n_btn' value="submit">Submit</button>
                  {/* <Link to="/address"><button className="a_btn">Address</button></Link> */}
                </form> 
            </div>
                
              
            </div>
        )  
    }
}