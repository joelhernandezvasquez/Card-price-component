
import React from 'react';
import ReactDom from 'react-dom';
import "./app.css";
import ToggleBtn from "./Components/ToggleBtn";
import Card from "./Components/Card";


class App extends React.Component{
    
    state = {
        plan: [
            {
                id: 1,
                planType: 'Basic',
                price: '199.99',
                storage: '500',
                users: 2,
                gigabyte: "3 GB"
                
            },
            {
                id: 2,
                planType: 'Professional',
                price: '299.99',
                storage: '1 TB',
                users: 5,
                gigabyte: "10 GB"
            },
            {
                id: 3,
                planType: 'Master',
                price: '399.99',
                storage: '2TB',
                users: 10,
                gigabyte: "20 GB"
            }
        ]
    }
    render() {
        return (
            <div className="container">
                <h1 className="title"> Our Pricing</h1>
            
                <ToggleBtn />
            
                <section className="card-container">
                    <Card plan = {this.state.plan[0]} />
                    <Card plan = {this.state.plan[1]}/>
                    <Card plan = {this.state.plan[2]}/> 

                </section>
    
            </div>
        );
    }
}

ReactDom.render(<App />,document.querySelector("#root"));


