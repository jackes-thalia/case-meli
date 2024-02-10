import isSSR from './isSSR'

const setSessionUser = (value: string) => {
  if (isSSR()) {
    return
  }
  return window?.sessionStorage.setItem('user', value)
}

export default setSessionUser
