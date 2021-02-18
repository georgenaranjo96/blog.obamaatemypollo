


import { 
    Header,
    Container,
    Row,
    Col,

} from 'react-bootstrap';
import Head from 'next/head';

export const getStaticProps = async () => {
    const res = await fetch(`https://shortcutsdb.herokuapp.com/fields`);
    const Fields = await res.json();
  
    return {
      props:{
        Fields
      },
    };
  }


export default function Post ({ Fields }) {
    return (
        <>
        <Head>
        <title>Blog.obamaatemypollo</title>
        <link rel="icon" href="/obama.png" />
        </Head>
        <nav className="navbar navbar-light navbar-expand-lg fixed-top  p-2 " id="mainNav" style={{ background: '#fff'}} ><div className="container"><a className="navbar-brand" href="/">blog.obamaatemypollo</a><button data-toggle="collapse" data-target="#navbarResponsive" className="navbar-toggler" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" /></button><div className="collapse navbar-collapse" id="navbarResponsive"><ul className="nav navbar-nav ml-auto"><li className="nav-item"><a className="nav-link" href="/">Blog</a></li><li className="nav-item"><a className="nav-link" href="http://obamaatemypollo.live">Home</a></li></ul></div></div></nav>

        <div className="header my-5">
            <div className="container py-3">
                <div className="row py-2">
                    <div className="col-md-10 col-lg-8 mx-auto my-1">
                        <div className="post-heading">
                            <h2>Cli commands for your browser </h2>
                            <h3 className='subheading'>terminal commands as easy as npm start </h3>
                            <span className='meta'>
                                posted by George Naranjo
                            </span>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>

        <hr/>

<article>
  <div className="container">
    <div className="row">
      <div className="col-md-10 col-lg-8 mx-auto">
        <p className='py-2'>
            As a react developer we able to create projects with an easy terminal command. 
        </p>
        <div className='py-3 bg-dark'>
        <code className='px-2 user-select-all '>npx create-react-app my-new-react-app</code>
        </div>

        <p className='py-3'>
            Or as this project was started with <a href='http://nextjs.org'>Next.js</a> 
        </p>
        <div className='py-3 bg-dark'>
        <code className='px-2 user-select-all'>npx create-next-app my-new-nextjs-app</code>
        </div>
        
        <p className='py-3'>
            but one dilema we encounter is not having links we can open in the browser that are as simple as those terminal commands.
            Luckily there are!

        </p>
        
        <p>
            Here is a list or simple URL's that can speed up starting projects so you can jump straight into develpoment.
        </p>

        <ul>
                {Fields.map((Field) => (
                    <li className='my-3'>
                        <a  
                        href={`http://${Field.URL}`}
                        target="_blank"
                        >
                        {Field.URL} </a>
                        <span>{Field.Desc} </span>
                    </li>
                    
                ))}
            
        </ul>
        
        
      </div>
    </div>
  </div>
</article>


            
        </>


    )
    
}



