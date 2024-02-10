const isSSR = () => {
  return typeof window === 'undefined'
}

export default isSSR
