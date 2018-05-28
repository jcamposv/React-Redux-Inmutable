import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';

// Styles
import styles from './styles';

// Reducers
import { login } from '../../reducers/user';

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


class Home extends Component<Props, void> {
  handleAction = () => {

  }

  props: Props


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.home}>
        Home Page
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Home));
