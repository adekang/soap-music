import type { FC } from 'react'
import React, { useState } from 'react'
import './index.scss'
import SvgIcon from '@/components/SvgIcon'
import type { RootState } from '@/store'
import { useAppSelector } from '@/store'
import { formatTime } from '@/utils/time'

interface Props {
  track: any
}

const TrackListItem: FC<Props> = ({ track }) => {
  const [hover, setHover] = useState(false)
  const { playing, currentTrack } = useAppSelector((state: RootState) => state.play)

  const album = () => {
    return track.album || track.al || track?.simpleSong?.al
  }
  const isAlbum = () => {
    return track.type === 'album'
  }
  const imgUrl = () => {
    const image
      = track?.al?.picUrl
      ?? track?.album?.picUrl
      ?? 'https://p2.music.126.net/UeTuwE7pvjBpypWLudqukA==/3132508627578625.jpg'
    return `${image}?param=224y224`
  }
  const subTitle = () => {
    let tn
    if (
      track?.tns?.length > 0
      && track.name !== track.tns[0]
    )
      tn = track.tns[0]

    return tn === undefined ? track.alia[0] : tn
  }

  const showTrackTime = () => {
    return track.type !== 'tracklist'
  }

  return (
    <div className="track" onMouseEnter={() => { setHover(true) }}
         onMouseLeave={() => { setHover(false) }}>
      {isAlbum() ? <img src={imgUrl()} alt="" loading="lazy" /> : null}
      <div className="no">
        <button>
          {hover ? <SvgIcon iconName="play" style={{ height: '14px', width: '14px' }} /> : null}
          {!hover ? <span>{track.no}</span> : null}
          {playing && currentTrack.id === track.id
            ? <SvgIcon iconName="volume" style={{ height: '16px', width: '16px' }} />
            : null}
        </button>
      </div>
      <div className="title-and-artist">
        <div className="container">
          <div className="title">
            {track.name}
            <span className="sub-title">{subTitle()}</span>
            {isAlbum() ? <span className="featured"></span> : null}
            {isAlbum() ? <span className="explicit-symbol"></span> : null}
          </div>
          <div className="artist">
            <span className="explicit-symbol before-artist"></span>

          </div>
        </div>
      </div>
      <div className="album"></div>
      <div className="actions">
        <button>
          <SvgIcon iconName="heart" />
        </button>
      </div>
      {showTrackTime() ? <div className="time">{formatTime(track.dt)}</div> : null}
      {track.playCount ? <div className="count"> {track.playCount}</div> : null}
    </div>
  )
}

export default TrackListItem
