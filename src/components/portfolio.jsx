import React from "react";
import { Icon } from "@iconify/react";

//import project GQ
import stock from "../img/gq1.png";
import stock1 from "../img/gq2.png";
import stock2 from "../img/gq3.png";
import stock3 from "../img/gq4.png";
import stock4 from "../img/gq5.png";
import stock5 from "../img/gq5.png";

//project iclass
import stocka from "../img/iclass.png";
import stocka1 from "../img/iclass1.png";
import stocka2 from "../img/iclass2.png";
import stocka3 from "../img/iclass3.png";
import stocka4 from "../img/iclass4.png";
import stocka5 from "../img/iclass5.png";
import stocka6 from "../img/iclass6.png";
import stocka7 from "../img/iclass7.png";
import stocka8 from "../img/iclass8.png";
import stocka9 from "../img/iclass9.png";

//import project OVBS
import stockb1 from "../img/ovbs1.png";
import stockb2 from "../img/ovbs2.png";
import stockb3 from "../img/ovbs3.png";
import stockb4 from "../img/ovbs4.png";

//import project VIMS
import stockc1 from "../img/VIMS1.png";
import stockc2 from "../img/VIMS2.png";
import stockc3 from "../img/VIMS3.png";
import stockc4 from "../img/VIMS4.png";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">My Projects</h3>
                <p className="subtitle-a"></p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">
                          {" "}
                          AUTOMOBILE MANAGEMENT SYSTEM
                        </h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            MongoDB | Express | ReactJS | NodeJS
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

                <div className="col-sm-4">
                  <div className="w-like">
                    <a
                      target="_blank"
                      href="google.com"
                      onClick={() =>
                        (window.location.href =
                          "http://github.com/tinulpiumika/ProjectGQ_ITP_Project")
                      }
                    >
                      {" "}
                      git
                      <Icon icon="ion:logo-github" />{" "}
                    </a>
                  </div>
                </div>

                <a
                  href={stock1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box">
                <a href={stocka} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={stocka} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">CLASS MANAGEMENT MOBILE APP</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Java | Firebase | Android Studio
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stocka1}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stocka2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stocka3}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stocka4}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stocka5}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stocka6}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stocka7}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stocka8}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stocka9}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <div className="col-sm-4">
                  <div className="w-like">
                    <a
                      target="_blank"
                      href="google.com"
                      onClick={() =>
                        (window.location.href =
                          "http://github.com/tinulpiumika/Project_iClass")
                      }
                    >
                      {" "}
                      git
                      <Icon icon="ion:logo-github" />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box">
                <a href={stockb3} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={stockb3} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">
                          ONLINE VIDEO BROWSING SYSTEM
                        </h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            JSP & Servlets | HTML | CSS | MySQL
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      \
                    </div>
                  </div>
                </a>
                <a
                  href={stockb1}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stockb2}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stockb3}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stockb4}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>

                <div className="col-sm-4">
                  <div className="w-like">
                    <a
                      target="_blank"
                      href="google.com"
                      onClick={() =>
                        (window.location.href =
                          "http://github.com/tinulpiumika/Project_OVBS")
                      }
                    >
                      {" "}
                      git
                      <Icon icon="ion:logo-github" />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box">
                <a href={stockc1} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={stockc1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">
                          ONLINE VEHICLE INSURANCE MANAGEMENT SYSTEM
                        </h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            PHP | HTML | CSS | SQL | JavaScript
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href={stockc1}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stockc2}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stockc3}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stockc4}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <div className="col-sm-4">
                  <div className="w-like">
                    <a
                      target="_blank"
                      href="google.com"
                      onClick={() =>
                        (window.location.href =
                          "http://github.com/tinulpiumika/Project_VIMS")
                      }
                    >
                      {" "}
                      git
                      <Icon icon="ion:logo-github" />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
