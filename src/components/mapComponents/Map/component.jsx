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
            maxZoom={30}
            dragging={true}
            animate={true}
            doubleClickZoom={false}
            scrollWheelZoom={true}
          >
            <MapEvent handleOpen={props.handleOpen}/>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup
              spiderLegPolylineOptions={{
                weight: 0,
                opacity: 0,
              }}
            >
              {console.log(props.markers)}
            {

              props.markers.map(markers => (
                <EventMarker
                  key={markers.id}
                  id={markers.id}
                  coords={markers.coords}
                  privacy={markers.privacy}
                  author={markers.author}
                  currentUser={props.currentUser.userProfile.email}
                  users={markers.users}
                  description={markers.description}
                  date={markers.date}
                />
              ),
              )
            }
            {}
            {
              props.temporaryMarker.coords
                ? (
                <TemporaryMarker
                  key={props.temporaryMarker.id}
                  id={props.temporaryMarker.id}
                  coords={props.temporaryMarker.coords}
                  privacy={props.temporaryMarker.privacy}
                  author={props.temporaryMarker.author}
                  currentUser={props.currentUser.userProfile.email}
                  users={props.temporaryMarker.users}
                  description={props.temporaryMarker.description}
                  date={props.temporaryMarker.date}
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
