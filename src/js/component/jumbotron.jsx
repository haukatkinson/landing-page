import React from 'react'

const Jumbotron = (props) => {
    return(
        <section class="jumbotron">
        <div class="container">
          <h1 class="jumbotron-heading float-left">Album example</h1>
          <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
          <p>
            <a href="#" class="btn btn-primary float-left">Main call to action</a>
          </p>
        </div>
      </section>
    )
}
export default Jumbotron