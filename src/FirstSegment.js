import React, { Component } from 'react';
import { Spring, config } from 'react-spring';

class FirstSegment extends Component {
  render() {
    const style = this.props.isVisible
      ? { background: '#fff' }
      : { background: '#ddd' };

    return (
      <div className="section" style={style}>
        <h3>First segment {this.props.isVisible && 'is now visible'}</h3>
        {this.props.isVisible && (
          <div style={{ fontSize: '3em' }}>
            <span style={{ marginRight: '5px' }}>Users</span>
            <span>
              <Spring
                from={{ number: 0 }}
                to={{ number: 4902941 }}
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

export default FirstSegment;
