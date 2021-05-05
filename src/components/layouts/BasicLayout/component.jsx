import React from 'react'
import PropTypes from 'prop-types'

import Header from '../../common/Header/Header'

const BasicLayout = ({ children }) => {
  return (
      <>
        <Header />
        {children}
      </>
  )
}

BasicLayout.propTypes = {
  children: PropTypes.node,
}

export default BasicLayout
