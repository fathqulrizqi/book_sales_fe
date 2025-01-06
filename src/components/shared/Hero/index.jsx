import Button from "../../ui/Button";

export default function Hero() {
    return (
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-indigo-500">Hi, I'm Fathqul 
            <br className="hidden lg:inline-block" />
            <span className="text-gray-900 sm:text-4xl text-3xl font-medium">I love to code</span>
        </h1>
            <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            <div className="flex justify-center">
              <Button txt="Get To Know Me" />
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="https://media.matamata.com/thumbs/2022/02/06/63841-profil-shirin-al-athrus-instagramatshireeenz/745x489-img-63841-profil-shirin-al-athrus-instagramatshireeenz.jpg" />
          </div>
        </div>
      </section>
    );
}