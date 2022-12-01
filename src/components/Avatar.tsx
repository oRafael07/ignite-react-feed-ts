import { ImgHTMLAttributes } from 'react'
import css from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {

  return (
    <img className={hasBorder ? css.avatarWithBorder : css.avatar} 
      {...props}
    />
  )
}