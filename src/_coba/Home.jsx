
import Header from './components/shared/Header/index.jsx';
import Footer from './components/shared/Footer/index.jsx';
import Author from './pages/author/index.jsx';
import Genre from './pages/Genre/index.jsx';
import { useState } from 'react';

const initAutomotives = [
  { car: "Mazda" },
  { car: "BMW" },
  { car: "Tesla" },
  { car: "BYD" },
]



function Home(){ 
  // let angka = 0
  const [angka, setAngka] = useState(0);

  const inClick = () => {
    setAngka(angka + 1)
  }
  function decClick(){
    setAngka(angka - 1)
  }

  const [automotive, setAutomotives] = useState(initAutomotives);
  const [car, setCars] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (car.trim() !== "") { // pastikan input tidak kosong
      setAutomotives([...automotive, { car }]); // menambahkan input ke array state automotive
      setCars(''); // mengosongkan input
    }

    setAutomotives([...automotive, { car }]);
    setCars('');
  }
  const handleChange = (event) => {
    setCars(event.target.value);
  }
  console.log(car);
  console.log(automotive);

    return(
        <>
        <p>Angka: {angka}</p>
        {/* <button onClick={inClick} className='px-5 py-2 bg-rose-300 mt-3'>Decrement</button> */}
        <button onClick={() => setAngka(angka + 1)} className='px-5 py-2 bg-rose-300 mt-3 mx-4'>Increment</button>

        <button onClick={decClick} className='px-5 py-2 bg-rose-300 mt-3'>Decrement</button>

        <ul className="mt-6 border py-8 my-8">
          <h2 className='font-bold'>Data Kendaraan:</h2>
            {automotive.map((automot, index) => (
              <li key={index} className="mt-2">{automot.car}</li>
            ))}
        </ul>

        <div className='border py-8 my-8'>
          <h1>Masukkan Kendaraan Anda</h1>
          <form onSubmit={handleSubmit}>
            <input value={car} onChange={handleChange} name="car" className='border pl-2 py-2' type="text" />
            <button type="submit" className='px-5 py-2 bg-rose-200 mt-3 mx-4'>Kirim</button>
          </form>
        </div>
        {/* <Header />
        <Author />
        <Genre />
        <Footer /> */}
        </>

    );
}

export default Home
// export { Header, Main, Footer }