import React from "react";


class Card extends React.Component{
   
  
    render() {
        //console.log(this.props.plan);
        return (
            <div class="card">
             
                <h2>{this.props.plan.planType}</h2>
                <span>$ {this.props.plan.price} </span>
                <div className="line"> </div>
                <p>{this.props.plan.storage} Storage</p>
                <div className="line"> </div>
                <p>{this.props.plan.users} Users Allowed</p>
                <div className="line"> </div>
                <p> Send up to {this.props.plan.gigabyte} </p>
                <div className="line"> </div>
                <button type="button">Learn More</button> 

            </div>
        );
    }
}

export default Card;