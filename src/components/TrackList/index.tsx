import type { FC } from 'react'
import React from 'react'
import './index.scss'
import TrackListItem from '@/components/TrackListItem'

interface Props {
  id: number
  tracks: any[]
  type: string
}

const TrackList: FC<Props> = (props) => {
  const { id, tracks, type } = props
  return (
    <div className="TrackList">
      {tracks?.map((track, index) => {
        return <TrackListItem track={track} key={index} />
      })}
    </div>
  )
}

export default TrackList
