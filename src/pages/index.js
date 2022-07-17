import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';

import pic8 from '../assets/images/pic08.jpg';
import Scroll from '../components/Scroll';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hi! I'm <strong>German Acosta</strong>
              <br />
              System Engineer
            </h2>
            <p>I have made few things check it out.</p>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Show me
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Portfolio</h2>
          </header>

          <p>These are some projects I did in my free time</p>

          <div className="row">
            <div className="col-6 col-12-mobile">
              <article className="item">
                <a
                  href="https://covtrackerg481.herokuapp.com/"
                  className="image fit"
                >
                  <img src={pic2} alt="" />
                </a>
                <header>
                  <br />
                  <form action="https://github.com/gdacosta148/CovTracker">
                    <button type="submit" class="btn btn-primary btn-lg">
                      View in github
                    </button>
                  </form>
                </header>
              </article>
            </div>

            <div className="col-6 col-12-mobile">
              <article className="item">
                <a href="https://amazona-dun.vercel.app/" className="image fit">
                  <img src={pic3} alt="" />
                </a>
                <header>
                  <br />
                  <form action="https://github.com/gdacosta148/Amazona">
                    <button type="submit" class="btn btn-primary btn-lg">
                      View in github
                    </button>
                  </form>
                </header>
              </article>
            </div>

            <div className="col-6 col-12-mobile">
              <article className="item">
                <a
                  href="http://ramseyramses-001-site1.itempurl.com/"
                  className="image fit"
                >
                  <img src={pic4} alt="" />
                </a>
                <header>
                  <br />

                  <button type="button" class="btn btn-primary btn-lg">
                    View in github
                  </button>
                </header>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <a href="/#" className="image featured">
            <img src={pic8} alt="" />
          </a>

          <p>
            I'm a systems engineer graduated from EAN university, i have a
            specialization in database management and security. I can program in
            languages like C#,Java and Javascript.
          </p>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>

          <p>
            If you want to ask me something or send me a message, you can use
            the form below
          </p>
          <br />

          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>
              <div className="col-12">
                <button type="submit" className="buttons">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
