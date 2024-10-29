'use client'

// import { logout } from '../services/api'

export default function LogoutButton () {
  const logout = () => {
    localStorage.removeItem('token')
    window.location.href = '/login' // Redirect to login page
  }

  return (
    <button
      onClick={logout}
      className='bg-red-500 text-white px-4 py-2 rounded'
    >
      Logout
    </button>
  )
}
