import React, { PureComponent } from 'react';

class Result extends PureComponent {
  render() {
    const { result } = this.props;

    return (
      <div className='container'>
        <h3>Résultat</h3>
        <p>{result}</p>
      </div>
    );
  }
}

export default Result;
