import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Form from 'components/base/Form';
import Result from 'components/base/Result';

import primeNumbers from 'data/primeNumbers';

class Prime extends PureComponent {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    staticContext: PropTypes.object,
  };

  static defaultProps = {
    staticContext: undefined,
  };

  constructor(props) {
    super(props);

    this.state = {
      input: 0,
      result: 0,
    };
  }

  _onChange = (value) => {
    this.setState({input: value});
  }

  _onPress = () => {
    const { input } = this.state;
    const result = primeNumbers[input - 1];

    this.setState({result});
  }

  render() {
    const { input, result } = this.state;
    return (
      <div className='container'>
        <h1>Prime page</h1>
        <Form value={input} onChange={(e) => this._onChange(e.target.value)} onPress={this._onPress}/>
        <Result result={result} />
      </div>
    );
  }
}

export default Prime;
