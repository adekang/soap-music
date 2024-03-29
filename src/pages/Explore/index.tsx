import React, { useEffect, useState } from 'react'
import './index.scss'
import { playlistCategories } from '@/utils'
import type { RootState } from '@/store'
import { useAppDispatch, useAppSelector } from '@/store'
import type { Category } from '@/store/categoriesSlice'
import { addDataToCategory, changePlaylists } from '@/store/categoriesSlice'
import type { DataProps } from '@/components/BoxList'
import BoxList from '@/components/BoxList'
import {
  getHighQualityList,
  getNormalPlayList,
  getRankListRequest,
  getRecommendList,
} from '@/services'
import Button from '@/components/Button'

const allBigCats = ['语种', '风格', '场景', '情感', '主题']

const Explore = () => {
  const dispatch = useAppDispatch()

  const { playlists } = useAppSelector((state: RootState) => state.categories)
  const [showCatOption, setShowCatOption] = useState(false)
  const [activeCategory, setActiveCategory] = useState('全部')
  const [hasMore, setHasMore] = useState(false)
  const { enabledPlaylistCategories } = useAppSelector((state: RootState) => state.categories)

  const getRecommendPlayList = () => {
    getRecommendList({ limit: 100 }).then(({ result }: { result: DataProps[] }) => {
      dispatch(changePlaylists(result))
    })
  }
  const getPlayList = (cat: string) => {
    getNormalPlayList({
      limit: 100,
      cat,
      offset: 0,
    }).then((items: { playlists: DataProps[] }) => {
      const array: DataProps[] = []
      items.playlists.length && items.playlists.map((item: DataProps, index: number) => {
        array.push(Object.assign({}, item, { picUrl: item.coverImgUrl }))
      })
      dispatch(changePlaylists(array))
    })
  }

  const getRankList = () => {
    getRankListRequest().then((res: any) => {
      const data = res.list
      const rank: DataProps[] = []
      data.map((item: any, index: number) => {
        rank.push(Object.assign({}, item, { picUrl: item.coverImgUrl }))
      })
      dispatch(changePlaylists(rank))
    })
  }

  const getHighQualityPlaylist = (times: 0 | 1) => {
    if (times) {
      const before = playlists?.length !== 0 ? playlists[playlists.length - 1].updateTime : 0
      console.log('before::', before)
      getHighQualityList({ limit: 50, before }).then((items: any) => {
        setHasMore(items.more)
        const array: DataProps[] = []
        items.playlists.length && items.playlists.map((item: DataProps, index: number) => {
          array.push(Object.assign({}, item, { picUrl: item.coverImgUrl }))
        })
        dispatch(changePlaylists([...playlists, ...array]))
      })
    }
    else {
      getHighQualityList({ limit: 50, before: 0 }).then((items: any) => {
        setHasMore(items.more)
        const array: DataProps[] = []
        items.playlists.length && items.playlists.map((item: DataProps, index: number) => {
          array.push(Object.assign({}, item, { picUrl: item.coverImgUrl }))
        })
        dispatch(changePlaylists(array))
      })
    }
  }

  const changeCategory = (data: Category) => {
    dispatch(addDataToCategory(data))
  }

  const getButtonPlaylist = (activeCategory: string) => {
    switch (activeCategory) {
      case '推荐歌单':
        getRecommendPlayList()
        break
      case '精品歌单':
        getHighQualityPlaylist(1)
        break
      case '排行榜':
        getRankList()
        break
      default:
        getPlayList(activeCategory)
        break
    }
  }

  useEffect(() => {
    switch (activeCategory) {
      case '推荐歌单':
        getRecommendPlayList()
        break
      case '精品歌单':
        dispatch(changePlaylists([]))
        getHighQualityPlaylist(0)
        break
      case '排行榜':
        getRankList()
        break
      default:
        getPlayList(activeCategory)
        break
    }
  }, [activeCategory])

  return (
    <div className="explore">
      <h1>发现</h1>
      <section>
        <div className="buttons">
          {enabledPlaylistCategories.map((item, index) => {
            return (<div key={item.name}
              className={`button ${item.name === activeCategory ? 'active' : ''}`}
              onClick={(e: any) => {
                setActiveCategory(e.target.innerText)
              }}>{item.name}</div>)
          })}
          <div className="button" onClick={() => {
            setShowCatOption(!showCatOption)
          }}>...
          </div>
        </div>
        {
          showCatOption
            ? (
              <div className="panel">
                {allBigCats.map((item, index) => {
                  return (
                    <div key={index} className="big-cat">
                      <div className="name">{item}</div>
                      <div className="cats">
                        {playlistCategories.filter(c => c.bigCat === item).map((category, index) => {
                          return (
                            <div key={category.name}
                              className={`cat ${enabledPlaylistCategories.findIndex((c: Category) => c.name === category.name) !== -1 ? 'active' : ''} `}
                              onClick={() => {
                                changeCategory(category)
                              }}><span>{category.name}</span></div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
              )
            : null
        }
      </section>
      <section className="explore-playlists">
        <BoxList data={playlists} type="playlist" />
      </section>
      <section className="load-more">
        {hasMore
          ? (
            <Button shape={'square'} className="grey"
              onClick={() => { getButtonPlaylist(activeCategory) }}>加载更多...</Button>
            )
          : null}
      </section>
    </div>
  )
}

export default Explore
