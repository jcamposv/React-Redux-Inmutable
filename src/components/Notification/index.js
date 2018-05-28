import React, { Component } from 'react';
import injectSheet from 'react-jss';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faBell from '@fortawesome/fontawesome-free-solid/faBell';

// Styles
import styles from './styles';

type Props = {
  classes: Object,
}

class Notification extends Component<Props> {
  renderIcon(): React.Component {
    return (
      <div className={this.props.classes.iconWrapper}>
        <FontAwesomeIcon icon={faBell} />
      </div>);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.Notification} >
        {
          this.renderIcon()
        }
      </div>
    );
  }
}

export default injectSheet(styles)(Notification);
