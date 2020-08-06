import React, { FunctionComponent, ComponentProps } from 'react'

interface Props extends ComponentProps<'span'> {
  color?: string
  blur?: number
}

export const ReactCensored: FunctionComponent<Props> = ({
  color = '#000000',
  blur = 8,
  children,
  ...props
}) => {
  const style = {
    color: `transparent`,
    textShadow: `0 0 ${blur}px ${color}`
  }

  return (
    <span {...props} style={style}>
      {children}
    </span>
  )
}
