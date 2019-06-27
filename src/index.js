import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import 'focus-visible/dist/focus-visible.min.js';

import './default.scss';
import glasses from './assets/glasses.jpg';
import metrodreamin from './assets/metrodreamin.svg';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
      showImage: false,
      showRes: false,
      showProjects: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showInfo: true
      })
    }, 500);

    setTimeout(() => {
      this.setState({
        showImage: true
      })
    }, 1000);

    setTimeout(() => {
      this.setState({
        showRes: true
      })
    }, 1500);

    setTimeout(() => {
      this.setState({
        showProjects: true
      })
    }, 2000);
  }

  renderFadeWrap(content) {
    return (
      <ReactCSSTransitionGroup
          transitionName="FadeAnim"
          transitionAppear={true}
          transitionAppearTimeout={400}
          transitionEnter={true}
          transitionEnterTimeout={400}
          transitionLeave={true}
          transitionLeaveTimeout={400}>
        {content}
      </ReactCSSTransitionGroup>
    );
  }

  render() {
    const info = (
      <div className="Main-info FadeAnim">
        <div className="Main-name">
          isaac nemzer
        </div>
        <div className="Main-description">
          software engineer, transit advocate, reptile enthusiast
        </div>
        <div className="Main-links">
          <a className="Main-github Link" href="https://github.com/the-nemz"
             target="_blank" rel="nofollow noopener noreferrer">
            github
          </a>
          <a className="Main-linkedin Link" href="https://www.linkedin.com/in/isaacnemzer/"
             target="_blank" rel="nofollow noopener noreferrer">
            linkedin
          </a>
        </div>
      </div>
    );

    const image = (
      <img className="Main-image FadeAnim" src={glasses} alt="Isaac in glasses in front of a wall of glasses" />
    );

    const res = (
      <div className="Main-res FadeAnim">
        <div className="Main-resLine Main-resLine--job">
          tech lead @ <a className="Link" href="https://yext.com"
                         target="_blank" rel="nofollow noopener noreferrer">
                        yext
                      </a>
        </div>
        <div className="Main-resLine Main-resLine--college">
          computer science @ <a className="Link" href="https://www.jhu.edu/"
                                target="_blank" rel="nofollow noopener noreferrer">
                               johns hopkins university
                             </a>
        </div>
        <div className="Main-resLine Main-resLine--highschool">
          <a className="Link" href="http://www.samohi.smmusd.org/"
             target="_blank" rel="nofollow noopener noreferrer">
            santa monica high school
          </a>
        </div>
      </div>
    );

    const projects = (
      <div className="Main-projects FadeAnim">
        <div className="Main-projectsHeading">
          projects
        </div>
        <div className="Main-project Main-project--metroDreamin">
          <a className="Main-projectImgLink" href="https://metrodreamin.com"
             target="_blank" rel="nofollow noopener noreferrer">
            <img className="Main-projectImg" src={metrodreamin} alt="Metro Dreamin'" />
          </a>
          <div className="Main-projectLinks">
            <a className="Main-projectTitle Link" href="https://metrodreamin.com"
               target="_blank" rel="nofollow noopener noreferrer">
              metro dreamin'
            </a>
            <a className="Main-projectSource Link" href="https://github.com/the-nemz/metro-dreamin"
               target="_blank"rel="nofollow noopener noreferrer">
              source code
            </a>
          </div>
          <div className="Main-projectDesc">
            metro dreamin' is a react web app that allows you to design and visualize the transportation system that you wish your city had
          </div>
        </div>
      </div>
    );

    return (
      <div className="Main Container">
        {this.state.showInfo ? this.renderFadeWrap(info) : ''}
        <div className="Main-content">
          <div className="Main-col Main-col--left">
            {this.state.showImage ? this.renderFadeWrap(image) : ''}
          </div>
          <div className="Main-col Main-col--right">
            {this.state.showRes ? this.renderFadeWrap(res) : ''}
            {this.state.showProjects ? this.renderFadeWrap(projects) : ''}
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
