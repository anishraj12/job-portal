import Header from '@/components/ui/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
    return (
        <div>
            <div className='grid-background'></div>
            <main className='min-h-screen container'>
                <Header></Header>

                <Outlet></Outlet>
            </main>
            <div className='p-10 text-center bg-gray-800 mt-10' >ANISH RAJ</div>

        </div>
    )
}

export default AppLayout