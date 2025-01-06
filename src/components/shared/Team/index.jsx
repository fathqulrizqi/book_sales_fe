const people = [
    {
        name: 'Fathqul Rizqi Adisti Putri',
        role: 'Front-End Developer',
        imageUrl: 'https://i.pinimg.com/736x/86/0b/5f/860b5f2572aa2b48ec39db64f0d2acbf.jpg',
    },
    {
        name: 'Fathqul Rizqi Adisti Putri',
        role: 'Back-End Developer',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo7pOff0Dyfh6lB4jkp5ihkrREMtSK_tzWaQ&s',
    },
    {
        name: 'Fathqul Rizqi Adisti Putri',
        role: 'UI/UX Designer',
        imageUrl: 'https://media.matamata.com/thumbs/2022/02/06/63841-profil-shirin-al-athrus-instagramatshireeenz/745x489-img-63841-profil-shirin-al-athrus-instagramatshireeenz.jpg',
    },
]

export default function Team(){
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="flex flex-wrap -m-2">
                    {people.map((person) => (
                        <div key={person.name} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={person.imageUrl} alt="shireenz.png" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">{person.name}</h2>
                                    <p className="text-gray-500">{person.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://i.pinimg.com/736x/86/0b/5f/860b5f2572aa2b48ec39db64f0d2acbf.jpg" alt="shireenz.png" />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">Fathqul Rizqi Adisti Putri</h2>
                                <p className="text-gray-500">Front-End Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo7pOff0Dyfh6lB4jkp5ihkrREMtSK_tzWaQ&s" alt="shireenz.png" />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">Fathqul Rizqi Adisti Putri</h2>
                                <p className="text-gray-500">Fullstack Developer</p>
                            </div>
                        </div>
                    </div>
                    

                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://media.matamata.com/thumbs/2022/02/06/63841-profil-shirin-al-athrus-instagramatshireeenz/745x489-img-63841-profil-shirin-al-athrus-instagramatshireeenz.jpg" alt="shireenz.png" />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">Fathqul Rizqi Adisti Putri</h2>
                                <p className="text-gray-500">Back-End Developer</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )

}

