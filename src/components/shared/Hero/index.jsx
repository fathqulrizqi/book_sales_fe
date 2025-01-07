import Button from "../../ui/Button";

export default function Hero() {
    return (
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-indigo-500">Book Sales 
            <br className="hidden lg:inline-block" />
            <span className="text-gray-900 sm:text-4xl text-3xl font-medium">Lorem ipsum dolor sit.</span>
        </h1>
            <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            <div className="flex justify-center">
              <Button txt="More Information" />
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="https://img.ctykit.com/cdn/co-boulder/images/tr:w-1800/boulder-book-store-2022.jpg" />
          </div>
        </div>
      </section>
    );
}