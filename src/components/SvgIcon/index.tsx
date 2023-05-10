import React, { memo, useMemo } from 'react'
import styles from './index.module.scss'

export interface svgProps {
  iconName: string
  fill?: string
  className?: string
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler<SVGSVGElement>
}

const SvgIcon: React.FC<Partial<svgProps>> = ({ iconName, fill, className, onClick, style }) => {
  const name = useMemo(() => `#icon-${iconName}`, [iconName])

  const svgClass = () => {
    if (className)
      return `${styles.icon} ${className}`
    else
      return styles.icon
  }

  return (
    <svg style={style} aria-hidden="true" className={svgClass()} onClick={onClick}>
      <use xlinkHref={name} fill={fill} />
    </svg>
  )
}

SvgIcon.displayName = 'SvgIcon'
export default memo(SvgIcon)
