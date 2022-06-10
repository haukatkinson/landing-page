import PropTypes from 'prop-types';
import React from 'react'

const Card = (props) => {
    const style = {width: "18rem"};


    return (
<div className="card" style={style}>
  <img className="card-img-top" src={props.imgurl} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.cardtext}</p>
    <a href={props.btnurl} className="btn btn-primary">{props.btntitle}</a>
  </div>
</div>
    )
}
Card.propTypes={
  text : PropTypes.string
}
export default Card