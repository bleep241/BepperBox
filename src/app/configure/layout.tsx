import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode;
}

const Layout = ({children}: Props) => {
  return (
    <MaxWidthWrapper className='flex-1 flex flex-col'>
      {children}
    </MaxWidthWrapper>
  )
}

export default Layout