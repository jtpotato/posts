import Image from 'next/image'
import PostsList from './PostsList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "jtpotato's Posts",
  description: "Where I write about the things I've made/the things I've noticed."
}

export default function Home() {
  return (
    <>
      <div className='font-body p-4'>
        <div className='mt-8 mb-16'>
          <p>I&apos;m Joel - and I write some stuff here.</p>
        </div>
        <div>
          <PostsList />
        </div>
      </div>

    </>
  )
}
