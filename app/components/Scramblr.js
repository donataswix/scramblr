import React from 'react';

export default class Scramblr extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>Hello, {this.props.name}!</div>;
  }
}
