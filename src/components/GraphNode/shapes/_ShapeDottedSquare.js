import React from 'react';

import Shape from './_Shape';
  
const renderTemplate = (attrs, { allowStroke = true } = {}) =>
  allowStroke ? (
    <rect key={0}
      width="1.8"
      height="1.8"
      rx="0.4"
      ry="0.4"
      x="-0.9"
      y="-0.9"
      strokeDasharray="0.1, 0.05"
      {...attrs}
    />
  ) : (
    <rect
      width="1.8"
      height="1.8"
      rx="0.4"
      ry="0.4"
      x="-0.9"
      y="-0.9"
      {...attrs}
    />
  );
  
export default class ShapeDottedSquare extends React.Component {
  render() {
    return <Shape renderTemplate={renderTemplate} {...this.props} />;
  }
}
