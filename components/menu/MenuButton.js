
const MenuButton = ({ menuOpen, setMenuOpen }) => {
  return (
    <button
      className="flex top-0 right-0 z-20 relative w-8 h-8 text-white focus:outline-none"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <div className="absolute w-6 transform -translate-x-6 -translate-y-1/2 left-1/2 top-1/2">
        <span
          className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${menuOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
            }`}
        ></span>
        <span
          className={`absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out ${menuOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
            }`}
        ></span>
        <span
          className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${menuOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
            }`}
        ></span>
      </div>
    </button>

  )
}

export default MenuButton