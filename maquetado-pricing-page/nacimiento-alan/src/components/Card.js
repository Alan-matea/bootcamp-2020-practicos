import React from "react";
import "../styles/Card.css";


class Card extends React.Component{
    render(){
        return(
            <div class="card mb-4 shadow-sm text-center" id="Card">
                <div class="card-header">
                    <h4 class="my-0 font-weight-normal">{this.props.category}</h4>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-card-title">${this.props.price}<small class="text-muted">/mo</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>{this.props.numero} users included</li>
                        <li>{this.props.gigas} GB of storage</li>
                        <li>Help center access</li>
                        <li>{this.props.contact}support</li>
                    </ul>
                    <button type="button" class="btn btn-block btn-outline-primary">{this.props.button}</button>
                </div>
            </div>
        )
    }        
}
export default Card;
