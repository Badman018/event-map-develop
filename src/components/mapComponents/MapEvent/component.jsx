import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import { useMapEvent } from 'react-leaflet'
import { changeTemporaryMarker } from '../../../core/store/actions/events'

const MapEvent = ({ handleOpen }) => {
  const dispatch = useDispatch()
  const author = useSelector(state => state.user.userProfile.email)
  const markers = useSelector(state => state.events.markers)
  const temporaryMarker = useSelector(state => state.events.temporaryMarker)

  useMapEvent('click', e => {
    if (temporaryMarker.description || temporaryMarker.date) {
      handleOpen()
    } else {
      dispatch(changeTemporaryMarker({
        id: markers.length + 1,
        author,
        coords: [e.latlng.lat, e.latlng.lng],
        description: '',
        date: '',
        privacy: false,
        users: [''],
        notification: true,
      }))
    }
  })
  return null
}

export default MapEvent
