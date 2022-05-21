import React, { useEffect, useState } from 'react'
import { Marker, Popup } from 'react-leaflet'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import L from 'leaflet'

import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core'
import { changeTemporaryMarker, saveNewMarker, removeTemporaryMarker } from '@/core/store/actions/events'
import iconMarker from '@/assests/marker.png'

import { Container } from './styles'

const marker = L.icon({
  iconUrl: iconMarker,
  iconSize: [35, 40],
  shadowSize: [50, 64],
  iconAnchor: [22, 94],
  shadowAnchor: [4, 62],
  popupAnchor: [-3, -76],
})

const TemporaryMarker = props => {
  const dispatch = useDispatch()
  const [description, setDescription] = useState(props.description)
  const [date, setDate] = useState('')
  const [isPublic, setIsPublic] = useState(props.privacy)
  const [availabilityUsers, setAvailabilityUsers] = useState('')

  const handleChangeForm = () => {
    dispatch(saveNewMarker({
      id: props.id,
      author: props.currentUser,
      coords: props.coords,
      description,
      date,
      privacy: props.privacy,
      users: props.users,
      notification: false,
    }))
    dispatch(removeTemporaryMarker())
  }
  useEffect(() => {
    dispatch(changeTemporaryMarker({
      id: props.id,
      author: props.currentUser,
      coords: props.coords,
      description,
      privacy: props.privacy,
      users: props.users,
      notification: false,
    }),
    )
  }, [description, date, isPublic])

  return (
    <>
    {console.log(props)}
      <Marker position={props.coords}>
        <Popup>
              <Container style={{ display: 'flex', flexDirection: 'column', rowGap: 20, height: 600, minHeight: 200, padding: 20, overflow: 'auto' }}>
                <TextField
                  multiline
                  variant="outlined"
                  size="small"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
                <TextField
                  id="datetime-local"
                  type="datetime-local"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={date}
                  onChange={e => setDate(e.target.value)}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={isPublic}
                      onChange={e => setIsPublic(e.target.checked)}
                      name="checkedA"
                    />
                  }
                  label="Public"
                />
                <TextField
                  id="avaibility-users"
                  variant="outlined"
                  type="text"
                  label="Users(comma separated)"
                  value={availabilityUsers}
                  onChange={e => setAvailabilityUsers(e.target.value.split(','))}
                />
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleChangeForm}
                >
                  Save event
                </Button>
              </Container>
        </Popup>
      </Marker>
    </>
  )
}

export default TemporaryMarker
