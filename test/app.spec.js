const expect = require('chai').expect;
const shallow = require('enzyme').shallow;

const React = require('react');

const Test = React.createClass({
  render() {
    return <div>Hello</div>;
  }
})

describe('App', function () {
  it('should work', function () {
    const test = shallow(<Test />);
    expect(test.text()).to.equal('Hello');
  });
});
