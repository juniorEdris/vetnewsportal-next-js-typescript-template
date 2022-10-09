import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const RandomNews:NextPage = () => {
  return (
    <div className="flex flex-wrap gap-3 items-center">
    <Link href="/">
      <div className="cursor-pointer hover:border-b-2 hover:border-primary transition-colors w-48% md:w-32% lg:w-24%">
        <h2 className="font-semibold text-lg">
          Lorem Ipsum is simply dummy text.
        </h2>
        <p className="text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          ad dolorum necessitatibus atque laborum consectetur unde nobis
          odio!
        </p>
      </div>
    </Link> {/**-------- */}
    <Link href="/">
      <div className="cursor-pointer hover:border-b-2 hover:border-primary transition-colors w-48% md:w-32% lg:w-24%">
        <h2 className="font-semibold text-lg">
          Lorem Ipsum is simply dummy text.
        </h2>
        <p className="text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          ad dolorum necessitatibus atque laborum consectetur unde nobis
          odio!
        </p>
      </div>
    </Link> {/**-------- */}
    <Link href="/">
      <div className="cursor-pointer hover:border-b-2 hover:border-primary transition-colors w-48% md:w-32% lg:w-24%">
        <h2 className="font-semibold text-lg">
          Lorem Ipsum is simply dummy text.
        </h2>
        <p className="text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          ad dolorum necessitatibus atque laborum consectetur unde nobis
          odio!
        </p>
      </div>
    </Link> {/**-------- */}
    <Link href="/">
      <div className="cursor-pointer hover:border-b-2 hover:border-primary transition-colors w-48% md:w-32% lg:w-24%">
        <h2 className="font-semibold text-lg">
          Lorem Ipsum is simply dummy text.
        </h2>
        <p className="text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          ad dolorum necessitatibus atque laborum consectetur unde nobis
          odio!
        </p>
      </div>
    </Link> {/**-------- */}
    <Link href="/">
      <div className="cursor-pointer hover:border-b-2 hover:border-primary transition-colors w-48% md:w-32% lg:w-24%">
        <h2 className="font-semibold text-lg">
          Lorem Ipsum is simply dummy text.
        </h2>
        <p className="text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          ad dolorum necessitatibus atque laborum consectetur unde nobis
          odio!
        </p>
      </div>
    </Link> {/**-------- */}
  </div>
  )
}

export default RandomNews