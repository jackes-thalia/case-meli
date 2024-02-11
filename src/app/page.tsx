'use client'
import getSessionUser from '@/utils/getSessionUser'
import { useRouter } from 'next/navigation'
import React from 'react'

export const Home = () => {
  const router = useRouter()

  React.useEffect(() => {
    const user = getSessionUser()
    if (user) {
      router.push('/dashboard')
    } else {
      router.push('/login')
    }
  }, [router])

  return <div></div>
}

export default Home
