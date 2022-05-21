import React, { useState } from 'react'
import { Marker, Popup } from 'react-leaflet'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { changeMarkerPopup } from '@/core/store/actions/events'
import { TextField, Switch, FormControlLabel, Button } from '@material-ui/core'
import { Container } from './styles'

const EventMarker = props => {
  console.log(props)

  const dispatch = useDispatch()
  const [isChange, setIsChange] = useState(false)
  const [description, setDescription] = useState(props.description)
  const [date, setDate] = useState(props.date)
  const [isChecked, setIsChecked] = useState(props.privacy)
  const [userPrivacy, setUserPrivacy] = useState('')

  const isAuthor = props.author === props.currentUser
  const userAvailability = props.users &&
  props.users.some(user => user === props.currentUser)

  const handleChangeForm = () => {
    if (!isChange) {
      setIsChange(true)
    } else {
      setIsChange(false)
      dispatch(changeMarkerPopup({
        id: props.id,
        author: props.currentUser,
        coords: props.coords,
        description,
        privacy: props.privacy,
        users: props.users,
        notification: false,
      }),
      )
    }
  }
  const handleDelete = () => {
  }

  return (
    props.privacy || userAvailability || props.author === props.currentUser
      ? (
        <>
          <Marker position={props.coords}>
            <Popup >
              {
                !isChange
                  ? (
                      <>
                        <div>
                          {description}
                        </div>
                        <div>
                          {date}
                        </div>
                      </>
                    )
                  : (
                        <Container style={{ display: 'flex', flexDirection: 'column', rowGap: 20, height: 600, minHeight: 200, padding: 20, overflow: 'auto' }}>
                          <TextField
                            variant="outlined"
                            fullWidth
                            multiline
                            label="Name"
                            size="small"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                          />
                          <TextField
                            variant="outlined"
                            fullWidth
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
                            variant="outlined"
                            fullWidth
                            label="User privacy"
                            size="small"
                            value={userPrivacy}
                            onChange={e => setUserPrivacy(e.target.value)}
                          />
                        </Container>
                    )
              }
              {isAuthor &&
                (
                  <div style={{ display: 'flex', paddingTop: 30 }}>
                    <Button
                      style={{ marginRight: 20 }}
                      variant="outlined"
                      fullWidth
                      color="primary"
                      onClick={handleChangeForm}
                    >
                      Change
                    </Button>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="primary"
                      onClick={handleDelete}
                    >
                      Delete
                    </Button>
                  </div>
                )
                }
            </Popup>
          </Marker>
        </>
        )
      : null
  )
}

export default EventMarker
