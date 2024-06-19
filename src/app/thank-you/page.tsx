import React, { Suspense } from 'react'
import ThankYou from './ThankYou'

type Props = {}

const Page = (props: Props) => {
  return (
    <Suspense>
      <ThankYou />
    </Suspense>
  )
}

export default Page