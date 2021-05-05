import React, { useEffect, useState } from 'react'
import { Marker, Popup } from 'react-leaflet'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import L from 'leaflet'

import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core'
import { changeTemporaryMarker, saveNewMarker, removeTemporaryMarker } from '@/actions/events'
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
  const [name, setName] = useState(props.popup.name)
  const [date, setDate] = useState('')
  const [isPublic, setIsPublic] = useState(props.privacy.public)
  const [availabilityUsers, setAvailabilityUsers] = useState('')

  const handleChangeForm = () => {
    dispatch(saveNewMarker(
      props.id,
      props.currentUser,
      props.position,
      { name, date },
      { isPublic, availabilityUsers },
      false,
    ))
    dispatch(removeTemporaryMarker())
  }
  useEffect(() => {
    dispatch(changeTemporaryMarker(
      props.id,
      props.currentUser,
      props.position,
      { name, date },
      { isPublic, availabilityUsers },
      false),
    )
  }, [name, date, isPublic])

  return (
    <>
      <Marker position={props.position}>
        <Popup>
            <form>
              <Container>
                <TextField
                  size="small"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                <TextField
                  id="datetime-local"
                  type="datetime-local"
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
            </form>
        </Popup>
      </Marker>
    </>
  )
}

TemporaryMarker.propTypes = {
  id: PropTypes.number,
  position: PropTypes.array,
  popup: PropTypes.object,
  currentUser: PropTypes.string,
  privacy: PropTypes.object,
}

export default TemporaryMarker
