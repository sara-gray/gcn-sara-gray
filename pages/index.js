import { useState } from 'react'

import Header from '../components/header/Header'
import Videos from '../components/videos/Videos'
import Social from '../components/social/Social'
import MenuOverlay from '../components/menu/MenuOverlay'

export default function Home({ videos }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (<main className='bg-stone-100 text-stone-800 w-screen'>
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <MenuOverlay menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
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
