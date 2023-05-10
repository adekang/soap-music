import React from 'react'
import './index.scss'
import { useParams } from 'react-router-dom'

const Artist = () => {
  const params = useParams<{ id: string }>()
  console.log('Artist::', params)

  return (
    <div className="Artist">
      Artist
    </div>
  )
}

export default Artist
