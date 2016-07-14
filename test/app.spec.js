import React from 'react';
import {shallow} from 'enzyme';

import Scramblr from '../app/components/Scramblr';
import {expect} from 'chai';

describe('Scramlr', function () {
  it('should greet known user', function () {
    const test = shallow(<Scramblr name="Klaudijus"/>);
    expect(test.text()).to.equal('Hello, Klaudijus!');
  });

  it('should ask for users name', function () {
    const game = shallow(<Scramblr />);
    const input = game.find('input');
    expect(test.text()).to.equal('Hello, Anonymous!');
  });
});
