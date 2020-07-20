import React from 'react' 
import Container from 'react-bootstrap/Container'

const Resume = () => {
    return (
        <Container>

            <div className="resume">
                <h3 className="resume-title">Resume</h3>
                <p>
                Experienced in Ruby on Rails and JavaScript based programming with a background in Clinical Laboratory Science. Over ten years of experience in the medical field as a medical technologist and supervisor in a microbiology department. Possess a strong work ethic with good communication skills that help companies make a meaningful impact on clients. I enjoy learning new things and like to assimilate new ideas.
                </p>
                <h5>Technical Skills</h5>
                <p> Ruby, Rails, Sinatra, SQL, JavaScript, React, Redux, HTML, CSS, Bootstrap</p>
                <h5>Experience</h5>
                <p><strong><em>Student Software Engineer</em></strong> at Flatiron School  | Dec 2019 – Jun 2020</p>
                
                <p>Built projects using Ruby, Rails, JavaScript. React and Redux</p>
               
                  <h6>Projects:</h6> 
                   <p><em>BookReviews</em>: <a href="https://github.com/anudukkipati/sinatra-book-review-app" target="_blank" rel="noopener noreferrer">GitHub</a> |<a href="https://vimeo.com/439455823" target="_blank" rel="noopener noreferrer"> Demo</a>
                       <p>A Content Management System where users can sign up, login, logout ,add, edit, and delete book reviews</p>
                        <ul>
                            <li>Built this app using Sinatra Library, and Ruby</li>
                            <li> Featured functionality allowing users to add, edit, delete comments on book reviews</li>
                            <li> Added user authentication using Bcrypt gem</li>
                        </ul>
                    </p>
                    <p><em>Dev.Notes</em>:  <a href="https://github.com/anudukkipati/react-redux-DevNotes" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://vimeo.com/419671183" target="_blank" rel="noopener noreferrer"> Demo</a>
                        <p>A single page application with a backend API where notes can be added using a form</p>
                        <ul>
                            <li>Applied Rails backend to handle data persistence with a relational database</li>
                            <li> Utilized React library to build frontend user interface (SPA)</li>
                            <li> Employed Redux library to maintain application state</li>
                            <li>Implemented RESTful routing using React-Router</li>
                        </ul>
                    
                    </p>
                    <p><em>FavoritePoems</em>: <a href="https://github.com/anudukkipati/FavoritePoems" target="_blank" rel="noopener noreferrer">GitHub</a>  | <a href="https://vimeo.com/439459717" target="_blank" rel="noopener noreferrer"> Demo</a>
                        <p>A Content Management System where users can create accounts, add, edit, delete their favorite poems</p>
                        <ul>
                            <li>Created both backend and frontend functionality using Rails framework</li>
                            <li>Defined user authentication using Bcrypt gem</li>
                            <li> Configured OmniAuth-Google-OAuth2 to allow users to login using google OAuth</li>
                            <li>Handled user authorization using conditional logic</li>
                        </ul>
                   </p>

                   <p><strong><em>Microbiology & Serology Supervisor and Faculty </em></strong>at Regional Laboratory at Austin State Hospital  | Jan 2017 – Apr 2019</p>
                   <ul>
                       <li>Reviewed SOPs and updated them to meet the current CAP standards</li>
                       <li>Implemented changes in the department’s laboratory processes to stay current</li>
                       <li>Updated Microbiology lecture content to meet the current MLS standards</li>

                   </ul>


                   <p><strong>Medical Laboratory Technologist, Department of Microbiology<em></em></strong>  at Clinical Pathology Laboratories Inc | Sep 2011 – Dec 2016</p> 
                   <ul>
                       <li>Earned a reputation for preparing accurate lab reports & sample logs as well as training and supervising employees</li>
                       <li>Consistently adhered to Good Laboratory Practice (GLP) as well as safety protocols, producing results that are accurate, safe, and compliant with regulatory standards</li>
                   </ul>

                   <p><strong><em>Laboratory Assistant, Department of Microbiology</em></strong> at Clinical Pathology Laboratories Inc | Nov 2007 – Aug 2011</p>
                   <ul>
                       <li>Maintains in-depth knowledge of medical terminology and discusses results and findings of laboratory tests and procedures with physicians in a courteous and timely manner</li>
                       <li>Supervised and trained new laboratory assistants</li>
                   </ul>
                   
                   <h5>Education</h5>
                   <p><strong>Flatiron School, Austin, Texas </strong></p>
                   <p>Full Stack Web Development, Ruby on Rails and JavaScript program | 	Dec 2019 - Jun 2020</p>

                   <p><strong>Austin State Hospital Medical Laboratory Science Program,	Austin, Texas </strong></p>
                   <p>Medical Laboratory Scientist (MLS) |	Aug 2010 - Aug 2011</p>

                   <p><strong>Sri Devaraj Urs Medical College, Bangalore University, Kolar, Karnataka</strong> </p>
                   <p>Bachelor of Medicine and Bachelor of Surgery (MBBS) |	Aug 1987 - May 1992</p>


            </div>

        </Container>
       
    )
}
export default Resume