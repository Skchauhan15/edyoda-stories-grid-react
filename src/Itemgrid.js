import React from "react";
import Card from "./Card";
import url from "./url/url";

class Itemgrid extends React.Component{
render(){
    return(
        <div className="item">{
           url.map(element => {
                return(
              <Card key={element.id} src={element.imgsrc} title={element.title} author={element.author} date={element.date} details={element.details}/>
                );
           })
        }  
        </div>    
       
    );
}
}
export default Itemgrid;