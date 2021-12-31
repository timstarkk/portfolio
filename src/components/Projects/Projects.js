import React from 'react';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import outcache   from '../../images/outcache.png';
import gifSearch  from '../../images/gifSearch.png';
import skyskraper from '../../images/skyskraper.png';
import shoestore  from '../../images/shoestore.png';
import compass    from '../../images/compass.png';
import fivestone  from '../../images/fivestone.png';

AOS.init({
    offet: 200,
    duration: 800
});

export default function Projects() {
    return (
        <>
            <div id="projects"></div>
            <div className="container">
                <section className="featured-card" data-aos="fade-up">
                    <img src={compass} alt="Compass Law Group Website" />
                    <div>
                        <div className="border-box">
                            <div className="text-box">
                                <h3>Compass Law Group Website</h3>
                                <p>This website was created from scratch using a Vue.js frontend, PHP/Laravel backend, and Statamic CMS. One highlight is the testimonial rotator. I worked with a designer on this project.
                                <br /><br />
                                    <a href="https://www.compasslawgroup.com">
                                        <button class="btn btn-primary">View Project</button>
                                    </a>
                                    <hr />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <br></br>

                <section className="card" data-aos="fade-left">
                    <img src={fivestone} alt="Fivestone Website" />
                    <div>
                        <div className="border-box">
                            <div className="text-box">
                                <h3>Fivestone Website</h3>
                                <p>I built this website for a design agency in New York using a Vue.js frontend, PHP/Laravel backend, and Statamic CMS. one highlight is the menu drawer animation.  I worked with a designer on this project.
                            <br /><br />
                                    <a href="https://www.fivestone.com">
                                        <button class="btn btn-primary">View Project</button>
                                    </a>
                                    <hr />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="card" data-aos="fade-left">
                    <img src={shoestore} alt="Shoe Store Example Site" />
                    <div>
                        <div className="border-box">
                            <div className="text-box">
                                <h3>ShoeStore</h3>
                                <p>A serverless E-commerce website built with React.js and AWS Cloud. AWS services used include Amplify, Cognito, AppSync, DynamoDB, and S3. The shopping cart was built from scratch without using libraries.
                            <br /><br />
                                    <a href="https://master.d1buvo1t3dd1m7.amplifyapp.com/">
                                        <button class="btn btn-primary" >View Project</button>
                                    </a>
                                    <a href="https://github.com/timstarkk/shoestore">
                                        <button class="btn btn-secondary">View Source</button>
                                    </a>
                                    <hr />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="card" data-aos="fade-right">
                    <img src={outcache} alt="Outcache" />
                    <div>
                        <div className="border-box">
                            <div className="text-box">
                                <h3>Outcache</h3>
                                <p>A peer-to-peer rental website for outdoor equipment. Built using the MERN stack. I was responsible for the front-end of this website, as well as some back end routing and component work.
                            <br /><br />
                                    <a href="http://www.outcache.com/">
                                        <button class="btn btn-primary" >View Project</button>
                                    </a>
                                    <a href="https://github.com/timstarkk/outcache">
                                        <button class="btn btn-secondary">View Source</button>
                                    </a>
                                    <hr />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="card" data-aos="fade-left">
                    <img src={skyskraper} alt="Mongo News Scraper" />
                    <div>
                        <div className="border-box">
                            <div className="text-box">
                                <h3>Mongo News Scraper</h3>
                                <p>A Node.js app that uses Cheerio.js to scrape the web (FinViz.com) for news articles, and stores them in a MongoDB database. Links to those articles are then pulled from the database and displayed on the homepage, and users can also create/delete comments on each article. This app uses mLab for hosting the database.
                            <br /><br />
                                    <a href="https://fin-news-talk.herokuapp.com">
                                        <button class="btn btn-primary" >View Project</button>
                                    </a>
                                    <a href="https://github.com/timstarkk/news-scraper">
                                        <button class="btn btn-secondary">View Source</button>
                                    </a>
                                    <hr />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="card" data-aos="fade-right">
                    <img src={gifSearch} alt="Gif Search" />
                    <div>
                        <div className="border-box">
                            <div className="text-box">
                                <h3>Gif Search</h3>
                                <p>A simple gif search tool using the Giphy API. This was made using jQuery and Bootstrap, and uses local storage to save search terms.
                            <br /><br />
                                    <a href="https://timstarkk.github.io/GIFsearch/">
                                        <button class="btn btn-primary" >View Project</button>
                                    </a>
                                    <a href="https://github.com/timstarkk/GIFsearch">
                                        <button class="btn btn-secondary">View Source</button>
                                    </a>
                                    <hr />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
