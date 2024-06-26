import { cn } from '@/lib/utils'
import React, { HTMLAttributes } from 'react'

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone = ({imgSrc, className, dark = false, ...props}: PhoneProps) => {
  return (
    <div className={cn("relative pointer-events-none z-50 overflow-hidden", className)} {...props}>
      <img src={dark ? "/phone-template-dark-edges-no-logo.png" : "/phone-template-white-edges-no-logo.png"} className='pointer-events-none z-50 select-none' alt="image of the back of an iphone" />

      <div className='absolute -z-10 inset-0'>
        <img src={imgSrc} className='object-cover size-full' alt="custom image for back of phone case" />
      </div>
    </div>
  )
}

export default Phone