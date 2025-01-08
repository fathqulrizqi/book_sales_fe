import genres from "../../utils/constants/genres";

export default function Genre() {
    return (
      <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="px-12 mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">Genres</h2>
              <p className="lg:w-2/3 mx-auto text-center leading-relaxed text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, nobis!</p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:px-8 md:space-y-0 sm:px-8">
            {genres.map((genre) => (
              <div>
                <h3 className="text-xl text-center text-indigo-900 font-bold mb-4">{genre.name}</h3>
                <p className="text-gray-500 text-justify ">{genre.description}</p>
              </div>
            ))}
          </div>
      </div>
    </section>
    )
}