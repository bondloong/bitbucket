import React from 'react'
import ArtList from '../../ArtList/ArtList'
import ArtDetails from '../../ArtList/Reducers/Actions/ArtDetails'
export default function Home() {
    return (
        <div className='container'>
            <ArtList />
            <ArtDetails />
        </div>
    )
}
