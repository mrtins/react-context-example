import React, { Component } from 'react';

import { Consumer } from '../providers/CounterProvider';
import Reset from './Reset';

export default class Uncount extends Component {
  render() {
    return (
      <div>
        <Consumer>
          {(counter) => (
            <div>
              <button onClick={counter.minusOne}>---</button>
              <Reset />
            </div>
          )}
        </Consumer>
      </div>
    )
  }
}
