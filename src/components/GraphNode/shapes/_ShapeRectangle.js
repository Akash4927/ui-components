import React from 'react';

import Shape from './_Shape';

const renderTemplate = attrs => (
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

export default class ShapeRectangle extends React.Component {
  render() {
    return <Shape renderTemplate={renderTemplate} {...this.props} />;
  }
}
