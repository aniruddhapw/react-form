import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import CurrencyDetails from "./Currency.json";
export default class Account extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[...CurrencyDetails],
            Currency:''
        };
        this.handleChange = this.handleChange.bind(this);
    };
    handleChange(event){
        this.state.data.map((data) => {
            if(data.Country == event.target.value){
                return this.setState({Currency:data.Currency})
            }
        });
    }
    render(){
        return(
            <div className='main-container'>
                <div className="content">
                <Link to="/next"><button className='p_btn bank_btn'>Bank Details</button></Link>
                <form>
                    <label>
                        Country <br />
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="Canada">Canada</option>
                            <option value="India">India</option>
                            <option value="United States">United States</option>
                            <option value="Japan">Japan</option>
                            <option value="Russia">Russia</option>
                        </select>
                    </label><br/><br/>
                    <label>
                        Currency<br/>
                        <input text="type" value={this.state.Currency} />
                    </label><br/><br/>
                    <label>
                       Account Number<br/><br/>
                     <input text="type"/>
                      </label><br/><br/>
                      <label>
                      ACH Routing Number<br/><br/>
                     <input text="type"/>
                      </label><br/><br/>
                </form>
                <Link to="/address"><button className="n_btn AN_btn">NEXT</button></Link>
                </div>
                
            </div>
        )
    }
}