import { useRef } from "react";
import authors from "../../utils/constants/authors";

export default function Author(){
    let authorList = [...authors]; //salin data array constant
    const authorContainerRef = useRef(null); // membuat container author

    const handleClick = () => {
        const newAuthor = {
            name: "John Doe",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqsv8JFaAnqUiz4YH4uFqvA_qL2NC7gnJv0g&s",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        }

    authorList.push(newAuthor);

    if (authorContainerRef.current){
        const newAuthorElement = document.createElement("div");
        newAuthorElement.className = "p-1 lg:w-1/2 md:w-1 w-full";
        newAuthorElement.innerHTML = 
        `
            <img src="${newAuthor.imageUrl}" />
            <h2 className="text-gray-900 title-font font-medium">${newAuthor.name}</h2>
            <p className="text-gray-500">${newAuthor.bio}</p>
        `;

        authorContainerRef.current.appendChild(newAuthorElement);
    }
    console.log(authorList);
    alert("Data Berhasil Ditambahkan")
    }

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Authors</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div ref={authorContainerRef} className="flex flex-wrap -m-2">
                    {authorList.map((author, index) => (
                        <div key={author.name} className="p-1 lg:w-1/2 md:w-1 w-full">
                            <div key={index} className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                <img className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={author.imageUrl} alt="shireenz.png" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">{author.name}</h2>
                                    <p className="text-gray-500">{author.bio}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                    <button onClick={handleClick} className="flex mx-auto mt-10 ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Send</button>

            </div>
        </section>
    )
}

    
