import React from 'react'

import preloader from '@/assests/loader.svg'

import style from './Preloader.module.css'

const Preloader = () => {
  return (
    <div>
        <img src={preloader} alt="" className={style.preloaderImg}/>
    </div>
  )
}

export default Preloader
