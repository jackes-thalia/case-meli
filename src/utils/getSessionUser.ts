import isSSR from './isSSR'

const getSessionUser = () => {
  if (isSSR()) {
    return
  }
  return window?.sessionStorage.getItem('user')
}

export default getSessionUser
