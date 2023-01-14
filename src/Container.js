import React from "react";

class Container extends React.Component{
render(){
    return(
       <>
       <div className="filtercontainer">
            <h1 className="heading">Trending Posts</h1>
                <img src="https://icones.pro/wp-content/uploads/2021/05/icone-de-filtre-bleu.png" alt="icon.img"/>
                <p className="filtertext">Filter by Category</p>
            <div className="container">
                <span className="containerCategories">All</span>
                <span className="containerCategories">Artificial Intelligence</span>
                <span className="containerCategories">Cloud Computing</span>
                <span className="containerCategories">DevOps</span>
                <span className="containerCategories">Programming Languages</span>
                <span className="containerCategories">Mobile Application Development</span>
                <span className="containerCategories">Technology and Tools</span>
                <span className="containerCategories">Get Job in Tech Company</span>
                <span className="containerCategories">Others</span>
            </div>
        </div>
       </>
    );
}
}
export default Container;