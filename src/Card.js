import React from "react";



class Card extends React.Component{
render(){
    return(
        <div className="items">
            <img src={this.props.src}/>
                <h3 className="text-section">{this.props.title}</h3>
                <span className="author">{this.props.author}</span>|
                <span className="date">{this.props.date}</span>
                <div className="details">{this.props.details}
                </div>
            </div>
    );
}
}
export default Card; 