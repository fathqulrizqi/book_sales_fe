export default function Header() {
    return (
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <img className="p-2 lg:w-1/12 md:w-1/2 w-full" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Text_company_logo.svg" alt="logo.png" />
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <ul className="flex space-x-5 text-gray-600">
              <li>
                <a className="hover:text-gray-900" href="home">Home</a>
              </li>
              <li>
                <a className="hover:text-gray-900" href="#about">About</a>
              </li>
              <li>
                <a className="hover:text-gray-900" href="#contact">Contact</a>
              </li>
              <li>
                <a className="hover:text-gray-900" href="#blog">Blog</a>
              </li>
              <li>
                <a className="hover:text-gray-900" href="#portfolio">Portfolio</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    );
  }
  