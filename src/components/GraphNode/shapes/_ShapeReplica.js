import React from 'react';

import Shape from './_Shape';

const UNIT_REPLICA_PATH = 'm-0.51607,-0.19654c0,0 0,0.45325 0,0.45325c0,0 0.95464,0 0.95464,0c0,0 0,-0.45325 0,-0.45325m-0.47732,-1.20346c-0.47732,0 -0.86125,0.13285 -0.86125,0.28914c0,0.15629 0.38393,0.28914 0.86125,0.28914c0.47732,0 0.86125,-0.13285 0.86125,-0.28914c0,-0.15629 -0.38393,-0.28914 -0.86125,-0.28914zm-0.86125,0.28914c0,0 0,1.65671 0,1.65671c0,0.15629 0.38393,0.28914 0.86125,0.28914c0.47732,0 0.86125,-0.13285 0.86125,-0.28914c0,0 0,-1.65671 0,-1.65671';

const renderTemplate = attrs => <path d={UNIT_REPLICA_PATH} {...attrs} />;

export default class ShapeReplica extends React.Component {
  render() {
    return <Shape renderTemplate={renderTemplate} {...this.props} />;
  }
}