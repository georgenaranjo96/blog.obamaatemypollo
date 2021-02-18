import React from 'react'

const Myfooter = () => {
    return (
    <footer>
  <div className="container">
    <div className="row">
      <div className="col-md-10 col-lg-8 mx-auto">
        <ul className="list-inline text-center">
          <li className="list-inline-item"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x" /><i className="fa fa-twitter fa-stack-1x fa-inverse" /></span></li>
          <li className="list-inline-item"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x" /><i className="fa fa-facebook fa-stack-1x fa-inverse" /></span></li>
          <li className="list-inline-item"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x" /><i className="fa fa-github fa-stack-1x fa-inverse" /></span></li>
        </ul>
        <p className="text-muted copyright">Copyright&nbsp;©&nbsp;blog.obamaatemypollo 2021</p>
      </div>
    </div>
  </div>
</footer>

    )
}

export default Myfooter
