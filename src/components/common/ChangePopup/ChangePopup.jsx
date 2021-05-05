import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { Button } from '@material-ui/core'

import { Wrapper } from './styles'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

const ChangePopup = ({ show, handleOpen, handleClose, handleRemove }) => {
  const classes = useStyles()
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={show}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={show}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Temporary marker didn't saved</h2>
            <p id="transition-modal-description">Want to delete to create new?</p>
            <Wrapper>
              <Button
                fullWidth
                variant="outlined"
                color="primary"
                onClick={handleClose}
              >
                No
              </Button>
              <Button
                fullWidth
                variant="outlined"
                color="primary"
                onClick={handleRemove}
              >
                Yes
              </Button>
            </Wrapper>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

ChangePopup.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  handleOpen: PropTypes.func,
  handleRemove: PropTypes.func,
}

export default ChangePopup
