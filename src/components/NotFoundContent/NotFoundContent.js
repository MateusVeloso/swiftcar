import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';

import FindIcon from '@material-ui/icons/FindInPage';
import HomeIcon from '@material-ui/icons/Home';

import EmptyState from '../EmptyState';

const styles = (theme) => ({
  emptyStateIcon: {
    fontSize: theme.spacing(12)
  },

  button: {
    marginTop: theme.spacing(1)
  },

  buttonIcon: {
    marginRight: theme.spacing(1)
  }
});

class NotFoundContent extends Component {
  render() {
    // Styling
    const { classes } = this.props;

    return (
      <EmptyState
        icon={<FindIcon className={classes.emptyStateIcon} color="action" />}
        title="404"
        description="Arquivo não encontrado"
        button={
          <Fab className={classes.button} color="secondary" component={Link} to="/" variant="extended">
            <HomeIcon className={classes.buttonIcon} /> Voltar ao Início
          </Fab>
        }
      />
    );
  }
}

NotFoundContent.propTypes = {
  // Styling
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NotFoundContent);
