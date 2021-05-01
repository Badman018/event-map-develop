import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { SIGN_IN_PAGE_PATH } from '@/constants/index'

import { Wrapper } from './styles'
import { removeUserData } from '../../../actions'

const NotFoundPage = props => {
  const dispatch = useDispatch()
  const history = useHistory()
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  if (isAuthenticated) {
    history.push(SIGN_IN_PAGE_PATH)
    dispatch(removeUserData())
  }
  return (
    <Wrapper>
      <h1>You should be authorize</h1>
      <Link to={SIGN_IN_PAGE_PATH}>Go to authorize page</Link>
    </Wrapper>
  )
}

export default NotFoundPage
