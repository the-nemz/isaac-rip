import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import 'focus-visible/dist/focus-visible.min.js';

import './default.scss';
import glasses from './assets/glasses.jpg';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
      showImage: false
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
          Isaac Nemzer
        </div>
        <div className="Main-links">
          <a className="Main-github Link" href="https://github.com/the-nemz">
            GitHub
          </a>
          <a className="Main-linkedin Link" href="https://www.linkedin.com/in/isaacnemzer/">
            LinkedIn
          </a>
        </div>
      </div>
    );

    const image = (
      <img className="Main-image FadeAnim" src={glasses} alt="Isaac in glasses in front of a wall of glasses" />
    );

    return (
      <div className="Main">
        <div className="Main-left">
          {this.state.showInfo ? this.renderFadeWrap(info) : ''}
          {this.state.showImage ? this.renderFadeWrap(image) : ''}
        </div>
        <div className="Main-right">
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
