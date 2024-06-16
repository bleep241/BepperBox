import { notFound } from 'next/navigation';
import { db } from '@/db';
import React from 'react'
import DesignConfigurator from './DesignConfigurator';

// nextjs pages automatically receive some props like searchParams
interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  }
}

// we can declare this component as an async function bc all components in next.js are server components by default
// this means that these components are run and rendered on the server side and then serves html to the client
// which MEANS we can do something like make a db call here, operate on the data, and send back the completed results as static HTML to the client
const Page = async ({ searchParams }: PageProps) => {
  const { id } = searchParams;

  // if somehow a user ends up on this page without passing an id
  // such as navigating to it directly
  if (!id || typeof id !== "string") {

    console.log('whatchu tryna cook up')
    // we will return the built in nextjs 404 not found page
    return notFound();
  }

  // search for an entry in our db against the id from the searchParams (should be the id generated by neon Postgres)
  const configuration = await db.configuration.findUnique({
    where: { id },
  })

  if (!configuration) {
    return notFound();
  }

  const { imageUrl, width, height, } = configuration;


  // as the user drags the image around on the design template, we don't want to send all those inputs to the server 
  // need to handle that in a client side component
  return (
    <DesignConfigurator configId={configuration.id} imageDimensions={{
      width,
      height,
    }} imageUrl={imageUrl} />
  )
}

export default Page