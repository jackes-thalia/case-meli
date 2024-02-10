'use client'
import getSessionUser from '@/utils/getSessionUser'
import { redirect } from 'next/navigation'
import React from 'react'

export const Home = () => {
  React.useEffect(() => {
    const user = getSessionUser()
    if (user) {
      redirect('/dashboard')
    } else {
      redirect('/login')
    }
  }, [])

  return <div></div>
}

export default Home
