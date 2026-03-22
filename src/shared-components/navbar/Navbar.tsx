import logo from '../../assets/logo.svg';

export function Navbar() {
  return (
    <>
      <nav className="px-8.5 py-6.5  min-h-12.5 flex items-center justify-between">
        <div className="">
          <img
            src={logo}
            alt="logo"
            className="rotate-90 scale-150 md:scale-200"
          />
        </div>
        <div className="text-white">Links</div>
      </nav>
    </>
  );
}
