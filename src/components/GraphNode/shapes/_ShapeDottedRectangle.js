import React from 'react';

import Shape from './_Shape';
  
const renderTemplate = (attrs, { allowStroke = true } = {}) =>
  allowStroke ? (
    <rect
      width="1.8"
      height="2.4"
      rx="0.4"
      ry="0.4"
      x="-0.9"
      y="-1.3"
      strokeDasharray="0.1, 0.05"
      {...attrs}
    />
  ) : (
    <rect
      width="1.8"
      height="2.4"
      rx="0.4"
      ry="0.4"
      x="-0.9"
      y="-1.3"
      {...attrs}
    />
  );
  
export default class ShapeDottedRectangle extends React.Component {
  render() {
    return <Shape renderTemplate={renderTemplate} {...this.props} />;
  }
}
