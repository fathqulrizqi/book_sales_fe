import Button from "../../ui/Button";

export default function Contact(){
    return (
        // const { btn } = props;
        <>
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Hubungi kami kapanpun, dimanapun</p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-1/2">
                        <div className="relative">
                            <label htmlFor="" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" name="" id="" className="w-full bg-gray-100 bg-opacity-50 rounded-border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="p-2 w-1/2">
                        <div className="relative">
                            <label htmlFor="" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" name="" id="" className="w-full bg-gray-100 bg-opacity-50 rounded-border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="p-2 w-full">
                        <div className="relative">
                            <label htmlFor="" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea type="text" name="" id="" className="w-full bg-gray-100 bg-opacity-50 rounded-border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 transition-colors resize-none h-32 leading-6 duration-200 ease-in-out"></textarea>
                        </div>
                    </div>
                    <div className="p-2 w-full">
                        <Button txt="Send"/>
                        {/* <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-md">{btn}</button> */}
                    </div>
                    <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                        <a href="" className="text-indigo-500">info@booksales.com
                          <p className="leading-normal my-5">Jakarta Selatan
                          <br />
                        Indonesia
                        </p>  
                        </a>
                    </div>
                </div>
                
            </div>
            </div>

            
        </section>
            
        </>
    )
}