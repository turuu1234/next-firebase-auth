"use client"
import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import Spinner from '../components/Spinner';

const page = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    }
    checkAuth();
  }, [user])


  return (
    <div className='p-4'>
      {loading ? (<Spinner/>) : user ? (<h1>Welcome {user.displayName}!</h1>) : (<h1>You must be logged in!</h1>)}
    </div>
  )
}

export default page