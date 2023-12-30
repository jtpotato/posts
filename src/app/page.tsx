import MouseTracker from './MouseTracker'
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
        <div className='mt-8 mb-16 p-4'>
          <h1>Posts</h1>
          <p>See my <a href="/"><span className='underline'>main site</span></a></p>
        </div>
        <div>
          <PostsList />
          <MouseTracker />
        </div>
      </div>

    </>
  )
}
