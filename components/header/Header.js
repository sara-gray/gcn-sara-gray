import Logo from './Logo'
import Search from './Search'
import MenuButton from '../menu/MenuButton'

const Header = ({ menuOpen, setMenuOpen }) => {

  return (
    <nav className='fixed inset-0
    bg-[#c30006]
    w-screen h-14 px-2
    flex justify-between items-center z-20'>
      <Logo />
      <div className='flex gap-2'>
        <Search />
        <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </nav>
  )
}

export default Header