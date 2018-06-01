import React, { PureComponent } from 'react';

import './Button.css';

class Button extends PureComponent {
  render() {
    const { onPress, text } = this.props;

    return (
      <div className='Button btn btn-primary' onClick={onPress}>
        {text}
      </div>
    )
  }
}

export default Button;
