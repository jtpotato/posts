import Image from 'next/image'
import PostsList from './PostsList'

export default function Home() {
  return (
    <>
      <div className='font-body p-4'>
        <div className='mt-8 mb-16'>
          <p>I&apos;m Joel - and here I write some stuff here.</p>
        </div>
        <div>
          <PostsList />
        </div>
      </div>

    </>
  )
}
