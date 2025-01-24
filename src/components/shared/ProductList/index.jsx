import { Link } from "react-router-dom";

export default function ProductList( {datas} ) {
  // ambil data buku dari productlist
  // const { datas } = props;

  console.log("productlist", datas); // cek data di console
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0, // 2 angka di belakang koma
      maximumFractionDigits: 2, // 2 angka di belakang koma
    })
      .format(number) // format angka
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Best Seller
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Pilih semua yang kamu suka!
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {datas.map((book) => (
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link
                to={`/books/${book.id}`}
                className="block relative h-48 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src=
                    {book.cover_photo}
                  
                />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1"></h3>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {book.genre.name}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {book.title}
                </h2>
                <p className="mt-1"><b>Price: </b>{formatRupiah(book.price)}</p>
                <p className="mt-1"><b>Stock: </b>{book.stock}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
