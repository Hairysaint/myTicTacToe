import {Outlet} from 'react-router-dom'

export default function Layout() {
  return (
    <div className='min-h-screen w-full flex justify-center items-center bg-gray-950 text-white'>
        <Outlet />
    </div>
  )
}