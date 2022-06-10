import React from 'react'

const Jumbotron = (props) => {
    return(
        <section className="jumbotron">
        <div className="container">
          <h1 className="jumbotron-heading float-left">{props.header}</h1>
          <p className="lead text-muted">{props.jumbotrontext}</p>
          <p>
            <a href={props.btnurl} className="btn btn-primary float-left">{props.btntitle}</a>
          </p>
        </div>
      </section>
    )
}
export default Jumbotron