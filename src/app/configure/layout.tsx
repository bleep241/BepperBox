import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Steps from '@/components/Steps';
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode;
}

const Layout = ({children}: Props) => {
  return (
    <MaxWidthWrapper className='flex-1 flex flex-col'>
      <Steps />
      {children}
    </MaxWidthWrapper>
  )
}

export default Layout