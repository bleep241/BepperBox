import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import Reviews from "@/components/Reviews";
import { ArrowRight, Check, Star } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <img src="/bepisHead.png" alt="my cute dog bepper" className="w-full" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">Your Image on a <span className="bg-yellow-800 text-white px-2">Custom</span> Phone Case</h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your favorite memories with your own, <span className="font-semibold">one-of-one</span> phone case.
                BepperBox allows you to protect your memories, not just your phone.
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-yellow-800" />
                    High-quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-yellow-800" />
                    5 year print warranty
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-yellow-800" />
                    Modern iPhone models supported
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-3">
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-1.png" alt="handsome male wearing glasses" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-2.png" alt="handsome male wearing glasses" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-3.png" alt="handsome male wearing glasses" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-4.jpg" alt="handsome male wearing glasses" />
                  <img className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-5.jpg" alt="handsome male wearing glasses" />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="size-5 text-yellow-800 fill-yellow-800" />
                    <Star className="size-5 text-yellow-800 fill-yellow-800" />
                    <Star className="size-5 text-yellow-800 fill-yellow-800" />
                    <Star className="size-5 text-yellow-800 fill-yellow-800" />
                    <Star className="size-5 text-yellow-800 fill-yellow-800" />
                    {/* <Star className="h-4 w-4 text-yellow-800 fill-yeltext-yellow-800" />
                    <Star className="h-4 w-4 text-yellow-800 fill-yeltext-yellow-800" />
                    <Star className="h-4 w-4 text-yellow-800 fill-yeltext-yellow-800" />
                    <Star className="h-4 w-4 text-yellow-800 fill-yeltext-yellow-800" />
                    <Star className="h-4 w-4 text-yellow-800 fill-yeltext-yellow-800" /> */}
                  </div>

                  <p><span className="font-semibold">1200</span> happy customers</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <img src="/your-image.png" className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block" alt="" />
              <img src="/line.png" className="absolute w-20 -left-6 -bottom-6 select-none" alt="" />
              {/* <Phone className="w-64" imgSrc="/testimonials/1.jpg" /> */}
              <Phone className="w-64" imgSrc="/phone-case-images/resized4.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-black text-5xl md:text-6xl text-gray-900">
              What our <span className="relative px2">customers</span> say
            </h2>
            <img src="/bepisHead.png" className="w-24 lg:order-2" />
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="size-5 text-yellow-800 fill-yellow-800" />
                <Star className="size-5 text-yellow-800 fill-yellow-800" />
                <Star className="size-5 text-yellow-800 fill-yellow-800" />
                <Star className="size-5 text-yellow-800 fill-yellow-800" />
                <Star className="size-5 text-yellow-800 fill-yellow-800" />
                {/* <Star className="size-5 text-yellow-800 fill-yeltext-yellow-800"/>
                <Star className="size-5 text-yellow-800 fill-yeltext-yellow-800"/>
                <Star className="size-5 text-yellow-800 fill-yeltext-yellow-800"/>
                <Star className="size-5 text-yellow-800 fill-yeltext-yellow-800"/>
                <Star className="size-5 text-yellow-800 fill-yeltext-yellow-800"/> */}
              </div>
              <div className="text-lg leading-8">
                <p>
                  "The case feels durable and I've gotten many compliments on the design. I have had my BepperBox for five months and <span className="px-1 py-0.5 bg-yellow-800 text-white">the image is super clear</span>-- on my previous case the image started fading after just a couple weeks!"
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img className="rounded-full size-12 object-cover" src="/users/user-1.png" alt="guy with beard" />
                <div className="flex flex-col">
                  <p className="font-semibold">Jonathan</p>
                  <div className="flex gap-1.5 items-center text-yellow-800">
                    <Check className="size-4 stroke-[3px] text-yellow-800" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
            {/* second user review */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="size-5 text-yellow-800 fill-yellow-800" />
                <Star className="size-5 text-yellow-800 fill-yellow-800" />
                <Star className="size-5 text-yellow-800 fill-yellow-800" />
                <Star className="size-5 text-yellow-800 fill-yellow-800" />
                <Star className="size-5 text-yellow-800 fill-yellow-800" />
                {/* <Star className="size-5 text-yellow-800 fill-yeltext-yellow-800"/>
                <Star className="size-5 text-yellow-800 fill-yeltext-yellow-800"/>
                <Star className="size-5 text-yellow-800 fill-yeltext-yellow-800"/>
                <Star className="size-5 text-yellow-800 fill-yeltext-yellow-800"/>
                <Star className="size-5 text-yellow-800 fill-yeltext-yellow-800"/> */}
              </div>
              <div className="text-lg leading-8">
                <p>
                  "I generally keep my phone with my keys in my pocket which usually leads to some pretty heavy scratches on the case. My BepperBox on the other hand <span className="px-1 py-0.5 bg-yellow-800 text-white">still looks brand new after over 4 months!</span>"
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img className="rounded-full size-12 object-cover" src="/users/user-4.jpg" alt="guy with beard" />
                <div className="flex flex-col">
                  <p className="font-semibold">Bepis</p>
                  <div className="flex gap-1.5 items-center text-yellow-800">
                    <Check className="size-4 stroke-[3px] text-yellow-800" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>

      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-black text-5xl md:text-6xl text-gray-900">
                Upload your photo and get <span className="relative px-2 bg-yellow-800 text-white">your own case</span> now
              </h2>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <img src="/arrow.png" className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0" />

              <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                <img src="/bepperBat_image.jpg" className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 size-full" />
              </div>

              <Phone className="w-60" imgSrc="/bepperBat_phone.jpg" />
            </div>
          </div>

          <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
            <li className="w-fit">
              <Check className="size-5 text-yellow-800 bg-slate-50 inline mr-1.5" />
              High-quality silicone material
            </li>
            <li className="w-fit">
              <Check className="size-5 text-yellow-800 bg-slate-50 inline mr-1.5" />
              Scratch and fingerprint resistant coating
            </li>
            <li className="w-fit">
              <Check className="size-5 text-yellow-800 bg-slate-50 inline mr-1.5" />
              Wireless charging compatible
            </li>
            <li className="w-fit">
              <Check className="size-5 text-yellow-800 bg-slate-50 inline mr-1.5" />
              5 year print warranty
            </li>

            <div className="flex justify-center">
              <Link href='/configure/upload' className={buttonVariants({
                size: 'lg',
                className: 'mx-auto mt-8 bg-yellow-800',
              })}>Create your case now <ArrowRight className="size-4 ml-1.5" /></Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
