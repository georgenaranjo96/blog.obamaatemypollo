import React from 'react'

const Nav = () => {
    return (
        <>
<nav className="navbar navbar-light navbar-expand-lg fixed-top my-3" id="mainNav" style={{ background: '#fff'}} >
  <div className="container"><a className="navbar-brand" href="/">blog.obamaatemypollo</a><button data-toggle="collapse" data-target="#navbarResponsive" className="navbar-toggler" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" /></button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="nav navbar-nav ml-auto">
        <li className="nav-item"><a className="nav-link" href="/">Blog</a></li>
        <li className="nav-item"><a className="nav-link" href="http://obamaatemypollo.live">Home</a></li>
      </ul>
    </div>
  </div>
</nav>

            
        </>
    )
}

export default Nav
