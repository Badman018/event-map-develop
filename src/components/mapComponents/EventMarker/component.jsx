import React, { useState } from 'react'
import { Marker, Popup } from 'react-leaflet'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { changeMarkerPopup } from '@/actions/events'
import { TextField, Switch, FormControlLabel, Button } from '@material-ui/core'
import { Container } from './styles'

const EventMarker = props => {
  const dispatch = useDispatch()
  const [isChange, setIsChange] = useState(false)
  const [name, setName] = useState(props.popup.name)
  const [date, setDate] = useState(props.popup.date)
  const [isChecked, setIsChecked] = useState(props.privacy.isPublic)
  const [userPrivacy, setUserPrivacy] = useState('')
  const isAuthor = props.author === props.currentUser
  const userAvailability = props.privacy.availabilityUsers.some(user => user === props.currentUser)

  const handleChangeForm = () => {
    if (!isChange) {
      setIsChange(true)
    } else {
      setIsChange(false)
      dispatch(changeMarkerPopup(
        props.id,
        props.currentUser,
        props.position,
        { name },
        props.privacy,
        false),
      )
    }
  }
  const handleDelete = () => {

  }

  return (
    props.privacy.isPublic || userAvailability
      ? (
        <>
          <Marker position={props.position}>
            <Popup>
              {
                !isChange
                  ? (
                      <>
                        <div>
                          {name}
                        </div>
                        <div>
                          {date}
                        </div>
                      </>
                    )
                  : (
                      <form>
                        <Container>
                          <TextField
                            label="Name"
                            size="small"
                            value={name}
                            onChange={e => setName(e.target.value)}
                          />
                          <TextField
                            label="Date"
                            id="datetime-local"
                            type="datetime-local"
                            defaultValue="2017-05-24T10:30"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            value={date}
                            onChange={e => setDate(e.target.value)}
                          />
                          <FormControlLabel
                            control={
                              <Switch
                                checked={isChecked}
                                onChange={e => setIsChecked(e.target.checked)}
                                name="checkedA"
                              />
                            }
                            label="Public"
                          />
                          <TextField
                            label="User privacy"
                            size="small"
                            value={userPrivacy}
                            onChange={e => setUserPrivacy(e.target.value)}
                          />
                        </Container>
                      </form>
                    )
              }
              {isAuthor
                ? (
                  <>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={handleChangeForm}
                    >
                      Change
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={handleDelete}
                    >
                      Delete
                    </Button>
                  </>
                  )
                : null}
            </Popup>
          </Marker>
        </>
        )
      : null
  )
}

EventMarker.propTypes = {
  id: PropTypes.number,
  position: PropTypes.array,
  popup: PropTypes.object,
  author: PropTypes.string,
  currentUser: PropTypes.string,
  privacy: PropTypes.object,
}

export default EventMarker
