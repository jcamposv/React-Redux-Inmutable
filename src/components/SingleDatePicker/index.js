import React, { Component } from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import injectSheet from 'react-jss';

// Styles
import 'react-dates/lib/css/_datepicker.css';
import styles from './styles';

type Props = {
  classes: Object,
};

class SingleDatePickerWrapper extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  }

  onFocusChange = ({ focused }) => {
    this.setState({ focused });
  }

  props: Props

  render() {
    return (
      <div className={this.props.classes.singleDatePicker}>
        <SingleDatePicker {...{
          date: this.state.date,
          onFocusChange: this.onFocusChange,
          onDateChange: date => this.setState({ date }),
          focused: this.state.focused,
        }}
        />
      </div>
    );
  }
}

export default injectSheet(styles)(SingleDatePickerWrapper);
