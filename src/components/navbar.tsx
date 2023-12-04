import Image from "next/image";

const Navbar = () =>{
  return <>
  <nav className="bg-[#49b9eb] flex justify-center h-12 items-center">
      <div className="container">
        <a href="/" className="navbar-brand d-flex align-items-center text-white">
          <Image src="/img/logo-editorial-mingeneros.svg" alt="Logo Editorial Mingeneros" height="30" width="140"></Image>
        </a>
      </div>
    </nav>
    </>
}

export default Navbar;