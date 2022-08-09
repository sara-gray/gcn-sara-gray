
import Header from '../components/header/Header'
import Videos from '../components/videos/Videos'
import Social from '../components/social/Social'

export default function Home({ videos }) {
  return (<main className='bg-stone-100 text-stone-800 w-screen'>
    <Header />
    <Videos videos={videos} />
    <Social />
  </main>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://www.globalcyclingnetwork.com/api/devtask`)
  const videos = await res.json()
  return { props: { videos } }
}
