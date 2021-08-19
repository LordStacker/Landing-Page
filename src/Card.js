import React from "react"
const Cards = (props) =>{
    return (
                <div class="card">
                        <img src={props.image1} className="img-fluid"/>
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>        
    )
}

export default Cards;