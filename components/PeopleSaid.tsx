import Image from 'next/image'
import React from 'react'

export default function PeopleSaid() {
  return (
    <div className="shadow-lg rounded-lg border-r-4 p-5 max-w-sm text-start cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
    <p className="border-gray-100 border-b-[1px] pb-5 text-sm">
      I just used it and am extremely impressed with the website and
      wanted to express my appreciation for the excellent design and
      functionality. Keep up the great work!
    </p>
    <div
    className="flex items-center justify-between mt-3"
    >
      <div>
      <p
      className="text-sm"
      >Amer Shboul</p>
      <p className="text-[11px] text-gray-400">CEO at Vercel</p>
      </div>
      <Image
      src="/michael-new.jpg"
      alt='amer'
      className="rounded-3xl"
      width={40}
      height={40}
      />
    </div>
  </div>
  )
}
