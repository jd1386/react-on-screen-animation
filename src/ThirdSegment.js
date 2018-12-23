import React, { Component } from 'react';
import { Spring, config } from 'react-spring';

class ThirdSegment extends Component {
  render() {
    const style = this.props.isVisible
      ? { background: '#fff' }
      : { background: '#ddd' };

    return (
      <div className="section" style={style}>
        <h3>Third segment {this.props.isVisible && 'is now visible'}</h3>
        {this.props.isVisible && (
          <React.Fragment>
            <div style={{ fontSize: '3em' }}>
              Popular in{' '}
              <Spring
                from={{ number: 0 }}
                to={{ number: 72 }}
                delay={200}
                config={config.molasses}
              >
                {springProps => {
                  return Math.round(springProps.number);
                }}
              </Spring>{' '}
              <span>Countries</span>
            </div>
            <div style={{ fontSize: '3em' }}>
              including..
              <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                delay={200}
                config={config.molasses}
              >
                {props => <div style={props}>Korea</div>}
              </Spring>
              <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                delay={200}
                config={config.molasses}
              >
                {props => <div style={props}>China</div>}
              </Spring>
              <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                delay={200}
                config={config.molasses}
              >
                {props => <div style={props}>Japan</div>}
              </Spring>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default ThirdSegment;
