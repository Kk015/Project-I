import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Accordion from "react-bootstrap/Accordion";

function App() {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500&display=swap"
        rel="stylesheet"
      />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/eb482c64-e879-4e88-9ddc-d839cb7d1232/d03a05fb-39a4-4594-b16c-ddc39f35f5bd/IN-en-20220131-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="n-bg"
        className="n-bg"
        width="1600"
        height="970"
      />
      <div className="but-top-right">
        <Button className="glob-but">
          <FontAwesomeIcon icon={faGlobe} />
          English
        </Button>
        <Button className="sign-but">Sign-in</Button>
      </div>
      <div className="section-1">
        <div className="f-1">Unlimited movies, TV shows and more.</div>
        <div className="f-2 f-2-1">Watch anywhere. Cancel anytime.</div>
        <div className="f-3">
          Ready to watch? Enter your email to create or restart your membership.
        </div>
      </div>
      <div class="input-group mb-3 input-group-lg  email-input ">
        <input
          type="text"
          class="form-control "
          placeholder="Email address"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          class="btn btn-outline-secondary e-input-but"
          type="button"
          id="button-addon2"
        >
          Get Started
        </button>
      </div>
      <div className="borderline bl1"></div>
      <div className="bg-black d1">
        <div class="container">
          <div class="row">
            <div class="col">
              <div className="f-1 s-2-1">Enjoy Your TV</div>
              <div className="f-2 f-2-2 s-2-2">
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.{" "}
              </div>
              <div class="col">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                  alt="n-bg"
                  className="tv-ph"
                  width="600"
                  height="400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="borderline bl2"></div>
      <div className="bg-black d2">
        <div class="container">
          <div class="row">
            <div class="col">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                alt="n-bg"
                className="st-pic"
                width="600"
                height="400"
              />
            </div>
            <div class="col">
              <div className="f-1-a">Download your shows to watch offline.</div>
              <div className="f-2-a">
                Save your favourites easily and always have something to watch.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="borderline bl2"></div>
      <div className="bg-black d2">
        <div class="container">
          <div class="row">
            <div class="col">
              <div className="f-1 s-2-1">Watch everywhere.</div>
              <div className="f-2 f-2-2 s-2-2">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </div>
              <div class="col">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
                  alt="n-bg"
                  className="mac-ph"
                  width="600"
                  height="400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="borderline bl2"></div>
      <div className="bg-black d2">
        <div class="container">
          <div class="row">
            <div class="col">
              <img
                src="https://occ-0-4345-3647.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf"
                alt="n-bg"
                className="st-pic"
                width="600"
                height="400"
              />
            </div>
            <div class="col">
              <div className="f-1-a">Create profiles for children.</div>
              <div className="f-2-a">
                Send children on adventures with their favourite characters in a
                space made just for them—free with your membership.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="borderline bl2"></div>
      <div className="bg-black d3">
        <div className="f-1 faq">Frequently Asked Questions</div>
        <Accordion defaultActiveKey="">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is Netflix?</Accordion.Header>
            <Accordion.Body>
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries and more – on
              thousands of internet-connected devices.<br></br> <br></br>You can
              watch as much as you want, whenever you want, without a single ad
              – all for one low monthly price. There's always something new to
              discover, and new TV shows and movies are added every week!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How much does Netflix cost?</Accordion.Header>
            <Accordion.Body>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Where can I watch?</Accordion.Header>
            <Accordion.Body>
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles.<br></br> <br></br> You can also
              download your favourite shows with the iOS, Android, or Windows 10
              app. Use downloads to watch while you're on the go and without an
              internet connection. Take Netflix with you anywhere.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>How do I cancel?</Accordion.Header>
            <Accordion.Body>
              Netflix is flexible. There are no annoying contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Where can I watch on Netflix?</Accordion.Header>
            <Accordion.Body>
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Is Netflix good for kids?</Accordion.Header>
            <Accordion.Body>
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              films in their own space.<br></br> <br></br> Kids profiles come
              with PIN-protected parental controls that let you restrict the
              maturity rating of content kids can watch and block specific
              titles you don’t want kids to see.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default App;
