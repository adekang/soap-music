import type { FC } from 'react'
import React from 'react'
import './index.scss'

interface ButtonProps {
  shape: 'square' | 'circle'
  children: React.ReactNode
  horizontalPadding?: number
  backgroundColor?: string
  textColor?: string
  onClick?: () => void
  className?: string
}

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    shape = 'square',
    horizontalPadding = 16,
    backgroundColor = '',
    textColor = '',
    className,
    onClick,
  } = props

  const buttonStyles = () => {
    const styles: React.CSSProperties = {
      padding: `${8}px ${horizontalPadding}px`,
      borderRadius: `${shape === 'circle' ? '50%' : '8px'}`,
      width: shape === 'circle' ? '38px' : 'auto',
    }
    if (backgroundColor !== '')
      styles.backgroundColor = backgroundColor

    if (textColor !== '') styles.color = textColor

    return styles
  }

  return (
    <div className="Button">
      <button onClick={onClick} className={className} style={buttonStyles()}>
        {children}
      </button>
    </div>
  )
}

export default Button
