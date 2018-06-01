import React, { PureComponent } from 'react';

import Button from 'components/base/Button';

class Form extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { onChange, value, onPress } = this.props;

    return (
      <div className='container'>
        <input value={value} onChange={onChange} />
        <Button text='Valider' onPress={onPress} />
      </div>
    );
  }
}

export default Form;
