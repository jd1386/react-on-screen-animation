import React, { Component } from 'react';
import { Spring, config } from 'react-spring';

class SecondSegment extends Component {
  render() {
    const style = this.props.isVisible
      ? { background: '#fff' }
      : { background: '#ddd' };

    return (
      <div className="section" style={style}>
        <h3>Second segment {this.props.isVisible && 'is now visible'}</h3>
        {this.props.isVisible && (
          <div style={{ fontSize: '3em' }}>
            <span>
              Revenue $
              <Spring
                from={{ number: 0 }}
                to={{ number: 593049402000 }}
                delay={200}
                config={config.slow}
              >
                {springProps => {
                  return Math.round(springProps.number);
                }}
              </Spring>
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default SecondSegment;
