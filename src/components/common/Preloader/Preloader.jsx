import React from 'react'

import preloader from '@/assests/loader.svg'

import { PreloaderContainer } from './styles'

const Preloader = () => {
  return (
    <PreloaderContainer>
        <img src={preloader} alt=""/>
    </PreloaderContainer>
  )
}

export default Preloader
