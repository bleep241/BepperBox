"use client"

import Phone from '@/components/Phone'
import { Button } from '@/components/ui/button'
import { BASE_PRICE, PRODUCT_PRICES } from '@/config/products'
import { cn, formatPrice } from '@/lib/utils'
import { COLORS, FINISHES, MODELS } from '@/validators/option-validator'
import { Configuration } from '@prisma/client'
import { useMutation } from '@tanstack/react-query'
import { ArrowRight, Check } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Confetti from 'react-dom-confetti'
import { createCheckoutSession } from './actions'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import LoginModal from '@/components/LoginModal'



const DesignPreview = ({ configuration }: { configuration: Configuration }) => {
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const { color, model, finish, material, id } = configuration;
  const twColor = COLORS.find((supportedColor) => supportedColor.value === color)?.tw;
  const { label: modelLabel } = MODELS.options.find(({ value }) => value === model)!;
  const { user } = useKindeBrowserClient();
  console.log('USER FROM KINDE', user);

  let totalPrice = BASE_PRICE;
  if (material === "polycarbonate") totalPrice += PRODUCT_PRICES.material.polycarbonate;
  if (finish === "textured") totalPrice += PRODUCT_PRICES.finish.textured;

  const router = useRouter();
  const { toast } = useToast();

  const { mutate: createPaymentSession, isPending } = useMutation({
    mutationKey: ["get-checkout-session"],
    mutationFn: createCheckoutSession,
    onSuccess: ({ url }) => {
      if (url) router.push(url);
      else throw new Error("Unable to retrieve payment URL.");
    },
    onError: () => {
      toast({
        title: "Something went wrong.",
        description: "There was an error checking out, please try again.",
        variant: "destructive",
      });
    }
  });

  const handleCheckout = () => {
    if (user) {
      // create a payment session
      createPaymentSession({configId: id});
    } else {
      // need to log in
      // store the config id in local storage
      localStorage.setItem("configurationId", id);
      setIsLoginModalOpen(true);
    }
  }

  useEffect(() => {
    setShowConfetti(true);
  }, []);

  return (
    <>
      <div aria-hidden="true" className='pointer-events-none select-none absolute inset-0 overflow-hidden flex justify-center'>
        <Confetti active={showConfetti} config={{
          elementCount: 200,
          spread: 90
        }} />
      </div>

      <LoginModal isOpen={isLoginModalOpen} setIsOpen={setIsLoginModalOpen}/>

      <div className='mt-20 flex flex-col items-center md:grid text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-12'>
        <div className='md:col-span-4 lg:col-span-3 md:row-span-2 md:row-end-2'>
          <Phone imgSrc={configuration.croppedImageUrl!} className={cn(`bg-${twColor}`, "max-w-[150px] md:max-w-full")} />
        </div>

        <div className='mt-6 sm:col-span-9 md:row-end-1'>
          <h3 className='text-3xl font-bold tracking-tight text-gray-900'>Your {modelLabel} Case</h3>
          <div className='mt-3 flex items-center gap-1.5 text-base'>
            <Check className='size-4 text-yellow-800' />
            In stock and ready to ship
          </div>
        </div>

        <div className='sm:col-span-12 md:col-span-9 text-base'>
          <div className='grid grid-cols-1 gap-y-8 border-b border-gray-200 py-8 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10'>
            <div>
              <p className='font-medium text-zinc-950'>Highlights</p>
              <ol className='mt-3 text-zinc-700 list-disc list-inside'>
                <li>Wireless charging compatible</li>
                <li>TPU shock absorption</li>
                <li>Packaging made from 100% recycled materials</li>
                <li>5 Year print warranty</li>
              </ol>
            </div>

            <div>
              <p className='font-medium text-zinc-950'>Materials</p>
              <ol className='mt-3 text-zinc-700 list-disc list-inside'>
                <li>High-quality, durable material</li>
                <li>Oleophobic and scratch resistant coating</li>
              </ol>
            </div>
          </div>

          <div className='mt-8'>
            <div className='bg-gray-50 p-6 sm:rounded-lg sm:p-8'>
              <div className='flow-root'>
                <div className='flex items-center justify-between py-1 mt-2'>
                  <p className='text-gray-600'>Base price</p>
                  <p className='font-medium text-gray-900'>{formatPrice(BASE_PRICE / 100)}</p>
                </div>
                {material === "polycarbonate" &&
                  <div className='flex items-center justify-between py-1 mt-2'>
                    <p className='text-gray-600'>Polycarbonate material</p>
                    <p className='font-medium text-gray-900'>{formatPrice(PRODUCT_PRICES.material.polycarbonate / 100)}</p>
                  </div>
                }
                {finish === "textured" &&
                  <div className='flex items-center justify-between py-1 mt-2'>
                    <p className='text-gray-600'>Textured finish</p>
                    <p className='font-medium text-gray-900'>{formatPrice(PRODUCT_PRICES.finish.textured / 100)}</p>
                  </div>
                }

                <div className='my-2 h-px bg-gray-200' />
                <div className='flex items-center justify-between py-2'>
                  <p className='font-semibold text-gray-900'>Order total</p>
                  <p className='font-semibold text-gray-900'>
                    {formatPrice(totalPrice / 100)}
                  </p>
                </div>
              </div>
            </div>

            <div className='mt-8 flex justify-end pb-12'>
              <Button onClick={() => handleCheckout()} isLoading={isPending} loadingText="Loading" disabled={isPending} className='px-4 sm:px-6 lg:px-8 bg-yellow-800'>
                Checkout <ArrowRight className='size-4 ml-1.5 inline' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DesignPreview