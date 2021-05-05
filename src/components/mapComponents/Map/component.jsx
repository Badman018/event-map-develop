import React from 'react'
import PropTypes from 'prop-types'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import { MapContainer, TileLayer } from 'react-leaflet'

import MapEvent from '../MapEvent/component'
import EventMarker from './../EventMarker/index'
import TemporaryMarker from './../temporaryMarker/index'
import BasicLayout from './../../layouts/BasicLayout/index'

import { Container } from './styles'

const Map = props => {
  return (
    <BasicLayout>
        <Container>
          <MapContainer
            center={[51.505, -0.09]}
            zoom={10}
            dragging={true}
            animate={true}
            doubleClickZoom={false}
            scrollWheelZoom={true}
          >
            <MapEvent handleOpen={props.handleOpen}/>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup
              spiderLegPolylineOptions={{
                weight: 0,
                opacity: 0,
              }}
            >
            {
              props.markers.map(markers => (
                <EventMarker
                  key={markers.id}
                  id={markers.id}
                  position={markers.position}
                  popup={markers.popup}
                  author={markers.author}
                  currentUser={props.currentUser.userProfile.email}
                  privacy={markers.privacy}
                />
              ),
              )
            }
            {
              props.temporaryMarker.position
                ? (
                <TemporaryMarker
                  key={props.temporaryMarker.id}
                  id={props.temporaryMarker.id}
                  position={props.temporaryMarker.position}
                  popup={props.temporaryMarker.popup}
                  author={props.temporaryMarker.author}
                  currentUser={props.currentUser.userProfile.email}
                  privacy={props.temporaryMarker.privacy}
                />
                  )
                : null
            }
            </MarkerClusterGroup>
          </MapContainer>
        </Container>
    </BasicLayout>
  )
}

Map.propTypes = {
  markers: PropTypes.array,
  currentUser: PropTypes.object,
  temporaryMarker: PropTypes.object,
}

export default Map
