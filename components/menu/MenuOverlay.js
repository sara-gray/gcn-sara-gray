
const MenuOverlay = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav
      className={`fixed flex top-0 left-0 w-full p-10 z-10 h-screen pt-24 bg-gray-900 text-white bg-opacity-100 transform delay-100 transition-all duration-400 ${menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 delay-500 -translate-x-full'
        }`}
    >
      <ul className='flex flex-col items-start'>
        <li className='nav-li'>
          <a
            href='https://www.gcnevents.co/'
            className='nav-link'
            onClick={() => {
              setMenuOpen(false)
            }}
          >
            Events
          </a>
        </li>
        <li className='nav-li'>
          <a
            href='https://club.globalcyclingnetwork.com/'
            className='nav-link'
            onClick={() => {
              setMenuOpen(false)
            }}
          >
            Club
          </a>
        </li>
        <li className='nav-li'>
          <a
            href='https://shop.globalcyclingnetwork.com/'
            className='nav-link'
            onClick={() => {
              setMenuOpen(false)
            }}
          >
            Shop
          </a>
        </li>
        <li className='nav-li'>
          <a
            href='/'
            className='nav-link'
            onClick={() => {
              setMenuOpen(false)
            }}
          >
            More...
          </a>
        </li>
      </ul>
    </nav>
  )

}

export default MenuOverlay