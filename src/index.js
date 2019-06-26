import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import 'focus-visible/dist/focus-visible.min.js';

import './default.scss';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
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

    return (
      <div className="Main">
        Isaac RIP
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
