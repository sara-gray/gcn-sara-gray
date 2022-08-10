import Video from './Video'

const Videos = ({ videos }) => {

  return (
    <section className='
    grid grid-cols-1 gap-2
    w-full h-1/2'>
      <h1 className='text-2xl font-semibold mt-16 px-2'>Latest Videos</h1>
      {videos.map((video) => <Video video={video} />)}
    </section >
  )
}

export default Videos