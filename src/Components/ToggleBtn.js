import React from "react";


class ToggleBtn extends React.Component{
    
    
    toggle = () => {
        const btn = document.querySelector(".btn"); 
        btn.classList.toggle("translate");
        
        
       
    }
    
    
    render() {
        return (
            <div className="toggle-container" onClick={this.toggle}>
                <h1>Anually</h1>
                <div className="toggle-container-btn">
                   <div className="btn"></div>
                </div>
                <h1>Monthly</h1>
            </div>
           
        );
           
    
    }
}

export default ToggleBtn;