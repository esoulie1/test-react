import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Button.css';

class Button extends PureComponent {

  static propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    onPress: () => {},
  };

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
