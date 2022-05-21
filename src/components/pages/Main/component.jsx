import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getMarkersRequest } from '@/core/store/actions'
import { removeTemporaryMarker } from '@/core/store/actions/events'

import ChangePopup from '../../common/ChangePopup/ChangePopup'
import Map from '../../mapComponents/Map'

import 'react-leaflet-markercluster/dist/styles.min.css'

const Main = () => {
  const markers = useSelector(state => state.events.markers)
  const currentUser = useSelector(state => state.user)
  const temporaryMarker = useSelector(state => state.events.temporaryMarker)
  const dispacth = useDispatch()

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleOpen = () => setShow(true)
  const handleRemove = () => {
    dispacth(removeTemporaryMarker())
    setShow(false)
  }

  useEffect(() => {
    dispacth(getMarkersRequest())
  }, [])

  return (
    <>
      <Map
        markers={markers}
        currentUser={currentUser}
        temporaryMarker={temporaryMarker}
        handleOpen={handleOpen}
      />
      <ChangePopup
      show={show}
      handleClose={handleClose}
      handleOpen={handleOpen}
      handleRemove={handleRemove}
      />
    </>
  )
}

export default Main
