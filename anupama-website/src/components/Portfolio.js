import React from 'react' 
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardGroup from 'react-bootstrap/CardGroup'
//import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'


const Portfolio = () => {

    return (
        <>
         <Row  >
            <Col>
           
           <div>
             <h2 className="portfolio-heading">Portfolio</h2>

           </div>
           </Col>
         </Row>
       
        <Row className="portfolio ">
        <div className="porfolio-div">
            
           <CardGroup>
            <Col xs={6} md={4}>
               
                <Card style={{ width: '40rem', marginBottom: '4px'}}>
                    <div className="card-body">
                        <h4 className="card-title">Book Reviews</h4>
                        <p><em>A Content Management System where users can add, edit, and delete book reviews and comments. Built using Sinatra.</em></p>
                        <div className="video-container" ><iframe title="book-reviews" height="300" src="https://player.vimeo.com/video/390892753" width="600"></iframe></div>
                    </div>
                </Card>
              
                
            </Col>
            <Col xs={6} md={4}>
           
                <Card style={{ width: '40rem',marginBottom: '4px' }}>
                 <div className="card-body">
                    <h4>Favorite Poems</h4>
                    <p><em>A Content Management System where users can add, edit, delete their favorite poems. Built using Ruby on Rails.</em></p>
                    <div className="video-container "><iframe title="favorite-poems"  height="300" src="https://player.vimeo.com/video/399466389" width="600"></iframe></div>
                 </div>   
                </Card>
           
            </Col>
            <Col xs={6} md={4}>
                <Card style={{ width: '40rem',marginBottom: '4px' }}>
                    <div className="card-body">
                    <h4>Dev.Notes</h4>
                    <p><em>A single page application with a backend API where notes can be added using a form. Built using Rails, React and Redux.</em></p>
                    <div className="video-container"><iframe title="dev-notes"  height="300" src="https://player.vimeo.com/video/419671183" width="600"></iframe></div>

                    </div>
                </Card>
                
            </Col>
                <Col xs={6} md={4}>
                    <Card style={{ width: '40rem',marginBottom: '4px' }}>    
                        <div className="card-body">
                        <h4>CLI gem project</h4>
                        <p><em>Utilized Nokogiri to retrieve library information from Austin Public Libraries and display each library's information</em></p>
                        <div className="video-containter"><iframe title="cli-gem"  height="300" src="https://player.vimeo.com/video/384286987" width="600"></iframe></div>

                        </div>
                    </Card>
                    
                </Col>
            </CardGroup>
               <div className="course-title">
                <p></p>
               </div>
            <CardGroup>
                <Col xs={6} md={4}>
                    <Card style={{ width: '34rem' }}>
                        <div className="card-body">
                            <h5 className="card-title text-center cardh5">YelpCamp</h5>
                            
                            <a className="card-link" href="https://fierce-wave-29213.herokuapp.com" target="_blank"rel="noopener noreferrer"> <img src="https://66.media.tumblr.com/1449e98bcc621f0c0508e63c666a12f6/tumblr_inline_qbkcq1yw9O1x875op_500.png" alt="yelpcamp"/></a>
                            <p></p>
                            <p className="description"><em>HTML, CSS, JavaScript, Express, Node, MongoDB, Bootstrap</em></p>

                        </div>
                    </Card>
                </Col>
                <Col xs={6} md={4}>
                    <Card style={{ width: '34rem' }}>
                        <div className="card-body">
                            <h5 className="card-title text-center cardh5">RGB Color Game</h5>
                            <a className="card-link" href="https://codepen.io/AnupamaD/full/JjjYRyX" target="_blank" rel="noopener noreferrer"> 
                            <img src="https://66.media.tumblr.com/66fe925fdc9457b97f00ed6e8986369e/tumblr_inline_qbj7eq5aSQ1x875op_500.png" alt="RBG color game" /></a>
                            <p></p>
                            <p className="description"><em>HTML, CSS, JavaScript, Bootstrap</em></p>
                        </div>
                    </Card>
                </Col>
                <Col xs={6} md={4}>
                    <Card style={{ width: '34rem' }}>
                        <div className="card-body">
                            <h5 className="card-title text-center cardh5">TODO List</h5>
                            <a className="card-link" href="https://codepen.io/AnupamaD/full/abbvmOo" target="_blank" rel="noopener noreferrer"> 
                            <img src="https://66.media.tumblr.com/7e5c5ad93a2de380ea73d9b4a82835c8/tumblr_inline_qbj9o32b1i1x875op_500.png" alt="TODO List" /></a>
                            <p></p>
                            <p className="description"><em>HTML, CSS, JavaScript, Bootstrap</em></p>
                        </div>
                    </Card>
                </Col>

                <Col xs={6} md={4}>
                    <Card style={{ width: '34rem' }}>
                        <div className="card-body">
                            <h5 className="card-title text-center cardh5">A Landing Page</h5>
                            <a className="card-link" href="https://codepen.io/AnupamaD/full/zYYGmdE" target="_blank" rel="noopener noreferrer"> 
                            <img src="https://66.media.tumblr.com/7f174bff19e9649c26d21e3ff3adfa17/tumblr_inline_qbk06d2f2X1x875op_500.png" alt="A Landing Page" /></a>
                            <p></p>
                            <p className="description"><em>HTML, CSS, Bootstrap</em></p>
                        </div>
                    </Card>
                </Col>

                <Col xs={6} md={4}>
                    <Card style={{ width: '34rem' }}>
                        <div className="card-body">
                            <h5 className="card-title text-center cardh5">A Picture Gallery</h5>
                            <a className="card-link" href="https://codepen.io/AnupamaD/full/ExxjBor" target="_blank" rel="noopener noreferrer"> 
                            <img src="https://66.media.tumblr.com/3690bcaf3b539a1f3a83a2a020a3dc4f/tumblr_inline_qbk0g7dGT71x875op_500.png" alt="A Gallery" /></a>
                            <p></p>
                            <p className="description"><em>HTML, CSS, Bootstrap</em></p>
                        </div>
                    </Card>
                </Col>

                <Col xs={6} md={4}>
                    <Card style={{ width: '34rem' }}>
                        <div className="card-body">
                            <h5 className="card-title text-center cardh5">Pattern</h5>
                            <a className="card-link" href="https://codepen.io/AnupamaD/full/jOOPgrQ" target="_blank" rel="noopener noreferrer"> 
                            <img src="https://66.media.tumblr.com/c0707e0f70953891157a6792d53deabb/tumblr_inline_qbk2tpwF3c1x875op_500.png" alt="A Pattern" /></a>
                            <p></p>
                            <p className="description"><em>HTML, CSS, Bootstrap</em></p>
                        </div>
                    </Card>
                </Col>

                <Col xs={6} md={4}>
                    <Card style={{ width: '34rem' }}>
                        <div className="card-body">
                            <h5 className="card-title text-center cardh5">Austin City Directory</h5>
                            <a className="card-link" href="http://webtrain.austincc.edu/~agadde/grid/index.html" target="_blank" rel="noopener noreferrer"> 
                            <img src="https://66.media.tumblr.com/3b5f5259e086713e2d98bcf26b5f70a5/tumblr_inline_qbkdhflyh81x875op_500.png" alt="Austin City Directory" /></a>
                           <br />
                            <br />
                            <br />
                            <p className="description"><em>HTML, CSS</em></p>
                            
                        </div>
                    </Card>
                </Col>

                <Col xs={6} md={4}>
                    <Card style={{ width: '34rem' }}>
                        <div className="card-body">
                            <h5 className="card-title text-center cardh5">A Product Landing Page</h5>
                            <a className="card-link" href="https://codepen.io/AnupamaD/full/RwbyqGd" target="_blank" rel="noopener noreferrer"> 
                            <img src="https://66.media.tumblr.com/884893c65284fa83db47df88d8c9534b/tumblr_inline_qbkbbaGN0U1x875op_500.png" alt="A Product Landing Page" /></a>
                            <p></p>
                            <p className="description"><em>HTML, CSS</em></p>
                        </div>
                    </Card>
                </Col>

                <Col xs={6} md={4}>
                    <Card style={{ width: '34rem' }}>
                        <div className="card-body">
                            <h5 className="card-title text-center cardh5">A Book Blog</h5>
                            <a className="card-link" href="http://webtrain.austincc.edu/~agadde/finalproject/portfolio/index.html" target="_blank" rel="noopener noreferrer"> 
                            <img src="https://66.media.tumblr.com/9ccf04c50c903fb8a19c927c04c65822/tumblr_inline_qbkdgtTqwo1x875op_500.png" alt="A Book Blog" /></a>
                            <p></p>
                            <p className="description"><em>HTML, CSS</em></p>
                        </div>
                    </Card>
                </Col>
            </CardGroup>
        </div>
       
        </Row>
        </>
    )
}

export default Portfolio