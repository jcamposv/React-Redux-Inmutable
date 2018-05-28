import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';

// Styles
import styles from './styles';

// Reducers
import { login } from '../../reducers/user';

// Layout Components

// Components

// Children Component


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


class Dashboard extends Component<Props, void> {
  props: Props

  handleActions() {
    this.hello = 'hello';
  }

  render() {
    const {
      classes,
    } = this.props;
    return (
      <div className={classes.dashboard}>
        This is a Dashboard
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Dashboard));
