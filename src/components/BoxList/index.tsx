import type { FC } from 'react'
import React from 'react'
import './index.scss'
import { useNavigate } from 'react-router-dom'
import Cover from '@/components/Cover'

export interface DataProps {
  id: number
  picUrl: string
  name: string
  info?: string
  type: 'cover' | 'singer'
  coverImgUrl?: string
  description?: string
}

export interface Props {
  type: 'artist' | 'playlist' | 'album'
  data: DataProps[]
}

const BoxList: FC<Props> = ({ data, type }) => {
  const navigate = useNavigate()

  const goTo = (id: number) => {
    if (type === 'album')
      return `/album/${id}`
    else if (type === 'artist')
      return `/artist/${id}`
    else
      return `/playlist/${id}`
  }

  return (
    <div className="box-container">
      {data !== undefined
        ? data.map((item) => {
          return (
            <div className="box-item" key={item.id} onClick={() => navigate(goTo(item.id))}>
              <Cover id={item.id} picUrl={item.picUrl} type={item.type} />
              <div className="text">
                <div className="title">{item.name}</div>
                {item?.info ? <div className="info">{item.info}</div> : null}
              </div>
            </div>
          )
        })
        : null}
    </div>
  )
}
export default BoxList
