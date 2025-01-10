import teams from "../../../utils/constants/teams"

export default function Developer() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-12 py-24 mx-auto">
        <div className="flex flex-wrap">
          <div className="flex items-center mb-3">
            <img
              className="w-56 bg-gray-100 object-cover object-center flex-shrink-0 mr-4 rounded-lg drop-shadow-md"
              src="https://i.pinimg.com/736x/86/0b/5f/860b5f2572aa2b48ec39db64f0d2acbf.jpg"
              alt=""
            />
            <div className="flex-grow">
              <h1 className="title-font text-lg font-medium text-indigo-400 ml-6 mb-2">
                Meet the <span className="text-indigo-500 underline">Developer</span>
              </h1>
              <h1 className="sm:text-3xl text-2xl font-medium title-font ml-6 mt-4 text-gray-900">
                Fathqul Rizqi Adisti Putri
              </h1>
              <h3 className="italic ml-6 mb-4">UI/UX Designer, Fullstack Web Developer</h3>
              <p className="leading-relaxed ml-6">
                Hello! I'm Fathqul Rizqi Adisti Putri, a passionate Fullstack Web Developer and UI/UX Designer
                dedicated to creating dynamic, functional, and visually appealing web applications.
              </p>
            </div>
          </div>
          <hr className="container mt-8 mb-2 w-full" />
          
          <div className="container px-12 py-8 mx-auto">
            <div className="flex-wrap -m-2">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-8">
                My Skills
              </h1>
              <div className="flex flex-wrap justify-between">
                
                <div className="w-full sm:w-1/3 px-12">
                  <div className="mb-2">
                    <i className="fa-solid fa-palette fa-lg"></i>
                  </div>
                  <h3 className="text-indigo-900">UI/UX Design</h3>
                  <p className="text-indigo-400">Prioritizing user experience through aesthetic and user-friendly designs using Figma</p>
                </div>

                <div className="w-full sm:w-1/3 px-12">
                  <div className="mb-2">
                    <i className="fa-solid fa-window-maximize fa-xl"></i>
                  </div>
                  <h3 className="text-indigo-900">Frontend Development</h3>
                  <p className="text-indigo-400">Crafting intuitive interfaces with modern frameworks using React</p>
                </div>

                <div className="w-full sm:w-1/3 px-12">
                  <div className="mb-2">
                    <i className="fa-solid fa-code fa-xl"></i>
                  </div>
                  <h3 className="text-indigo-900">Backend Development</h3>
                  <p className="text-indigo-400">Building robust and scalable systems using technologies like Laravel.</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
