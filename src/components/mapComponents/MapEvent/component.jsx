import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import { useMapEvent } from 'react-leaflet'
import { changeTemporaryMarker } from '../../../actions/events'

const MapEvent = ({ handleOpen }) => {
  const dispatch = useDispatch()
  const author = useSelector(state => state.user.userProfile.email)
  const markers = useSelector(state => state.events.markers)
  const temporaryMarker = useSelector(state => state.events.temporaryMarker)

  useMapEvent('click', e => {
    if (temporaryMarker.popup.name || temporaryMarker.popup.date) {
      handleOpen()
    } else {
      dispatch(changeTemporaryMarker(
        markers.length + 1,
        author,
        [e.latlng.lat, e.latlng.lng],
        {
          name: '',
          date: '',
        },
        {
          public: true,
          availabilityUsers: [''],
        },
        true,
      ))
    }
  })
  return null
}

export default MapEvent
