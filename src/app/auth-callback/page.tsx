"use client"

import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import { getAuthStatus } from './actions';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

type Props = {}

const Page = (props: Props) => {
  const [configId, setConfigId] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const configurationId = localStorage.getItem("configurationId");

    if (configurationId) setConfigId(configurationId);
  }, []);


  // this query will check whether or not this user exists in our database
  const {data} = useQuery({
    queryKey: ["auth-callback"],
    queryFn: async () => await getAuthStatus(),
    retry: true,
    retryDelay: 500,
  });

  if (data?.success) {
    if (configId) {
      localStorage.removeItem("configurationId");
      router.push(`/configure/preview?id=${configId}`);
    } else {
      router.push('/');
    }
  }

  return (
    <div className='w-full mt-24 flex justify-center'>
      <div className='flex flex-col items-center gap-2'>
        <Loader2 className='size-8 animate-spin text-zinc-500'/>
        <h3 className='font-semibold text-xl'>Loggin you in...</h3>
        <p>You will automatically be redirected.</p>
      </div>
    </div>
  )
}

export default Page