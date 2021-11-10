import React from "react";
//import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "cncpp_skill",
          content: "C / C++",
          porcentage: "90%",
          value: "90",
        },
        {
          id: "java_skill",
          content: "Java",
          porcentage: "95%",
          value: "95",
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "75%",
          value: "75",
        },
        { id: "HTML5_skill", content: "HTML5", porcentage: "85%", value: "85" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "80%", value: "80" },

        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90",
        },
        { id: "PHP_skill", content: "PHP", porcentage: "70%", value: "70" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80",
        },
        {
          id: "node_skill",
          content: "NodeJS",
          porcentage: "75%",
          value: "75",
        },
        {
          id: "express_skill",
          content: "Express",
          porcentage: "75%",
          value: "75",
        },
        {
          id: "MongoDB_Skill",
          content: "MongoDB",
          porcentage: "75%",
          value: "75",
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am a motivated and hardworking individual who wishes to succeed in the IT field. Currently, I am specializing in data science at the Sri Lanka Institute of Information Technology as an undergraduate in information technology. I've always been enthusiastic about learning areas of data science, computer vision, deep learning, and machine learning in general. I highly believe that bigger goals are achieved through smart work, dedication, and collaboration. Therefore I consider that I have the skills which require to accomplish my future targets.",
        },
      ],
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map((skill) => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map((content) => {
                        return (
                          <p
                            className="lead"
                            key={content.id}
                            style={{
                              textAlign: "justify",
                              textJustify: "inter-word",
                            }}
                          >
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
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

export default About;
