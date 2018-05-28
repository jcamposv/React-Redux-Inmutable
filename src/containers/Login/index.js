import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';

// Styles
import styles from './styles';

// Reducers
import { login } from '../../reducers/user';

// In House Components

type Props = {
  classes: Object,
};

function mapStateToProps(state: Object): Object {
  return state;
}

function mapDispatchToProps(dispatch: Object) {
  return {
    actions: bindActionCreators({
      login,
    }, dispatch),
  };
}


class Login extends Component<Props, void> {
  constructor(props) {
    super(props);
    this.state = {
      // name: '',
    };
  }
  props: Props


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.login}>
        Login Page
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Login));
