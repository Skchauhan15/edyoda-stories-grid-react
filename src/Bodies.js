import React from "react";
import Container from "./Container";
import Itemgrid from "./Itemgrid";
class Bodies extends React.Component{
    render(){
       return(
        <div id="body">
          <Container></Container>
          <Itemgrid></Itemgrid>
          </div>
       );
    }
}
export default Bodies;