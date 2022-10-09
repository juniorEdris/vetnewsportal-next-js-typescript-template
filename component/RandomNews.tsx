import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const RandomNews:NextPage = () => {
  return (
    <div className="flex flex-wrap gap-3 items-center">
    <Link href="/">
      <div className="w-2/4 md:w-1/4">
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
      <div className="w-2/4 md:w-1/4">
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
      <div className="w-2/4 md:w-1/4">
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
      <div className="w-2/4 md:w-1/4">
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
      <div className="w-2/4 md:w-1/4">
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