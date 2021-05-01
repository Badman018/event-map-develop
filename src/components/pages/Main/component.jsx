import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

import BasicLayout from '../../layouts/BasicLayout/component'

import { Container } from './styles'

const Main = () => {
  return (
    <BasicLayout>
      <Container>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={10}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </Container>
    </BasicLayout>
  )
}

export default Main
