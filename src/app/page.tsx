import Image from 'next/image'
import PostsList from './PostsList'

export default function Home() {
  return (
    <>
      <div className='font-body p-4'>
        <div className=''>
          <p>I&apos;m Joel - and here I write about some of the stuff I&apos;ve worked on.</p>
        </div>
        <div>
          <PostsList />
        </div>
      </div>

    </>
  )
}
