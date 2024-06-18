import { db } from '@/db';
import { notFound } from 'next/navigation';
import React from 'react'
import DesignPreview from './DesignPreview';

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  }
}

const Page = async ({ searchParams }: PageProps) => {
  const { id } = searchParams;

  // check for presence of id or invalid format
  if (!id || typeof id !== "string") return notFound();

  const configuration = await db.configuration.findUnique({
    where: { id },
  });

  // if there is no match in the db return not found page
  if (!configuration) return notFound();

  return (
    // <pre>{JSON.stringify(configuration, null, 2)}</pre>
    <DesignPreview configuration={configuration} />
  )
}

export default Page
