import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'

const Social = () => {
  return (
    <nav className='fixed bottom-0 h-10 w-screen bg-transparent'>
      <div className='
      w-2/3 h-full pt-1 px-4 mx-auto
      flex flex-row justify-between items-center
      bg-black shadow-2xl rounded-t-xl
      text-stone-100 text-xl'>
        <Link href='https://www.facebook.com/globalcyclingnetwork' target='_blank'>
          <FaFacebookF className='w-5 h-5' />
        </Link>
        <Link href='https://twitter.com/gcntweet' target='_blank'>
          <FaTwitter className='w-5 h-5' />
        </Link>
        <Link href='https://www.instagram.com/globalcyclingnetwork/?hl=en' target='_blank'>
          <FaInstagram className='w-5 h-5' />
        </Link>
        <Link href='https://www.youtube.com/user/globalcyclingnetwork' target='_blank'>
          <FaYoutube className='w-5 h-5' />
        </Link>
      </div></nav >
  )
}

export default Social