import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
    return (
        <div>

            <Outlet></Outlet>

        </div>
    )
}

export default AppLayout
