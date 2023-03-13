import React, { Component } from 'react';
import {Link} from "react-router-dom";
export default class Home extends Component{
    render(){
        return(
            <div className='main-container'>
                <div className="content">
                <div className='account_types'>
                <Link to='/'><button className='p_btn'>PERSONAL</button></Link>
                <Link to='/buisness'><button className='b_btn'>BUSINESS</button></Link>
                </div>
               
                <form>
                    <label><input type="text" placeholder="First Name" required/></label><br/><br/>
                    <label><input type="text" placeholder="Last Name" required/></label><br/><br/>
                    <label><input type="email" placeholder="Email" required/></label><br/><br/>
                    <label><input type="number" placeholder="Phone Number" required/></label><br/><br/>
                    <Link to='/next'><button type='submit' className='n_btn'>NEXT</button></Link>
                </form>
               
                </div>
                
            </div>
        )
    }
}