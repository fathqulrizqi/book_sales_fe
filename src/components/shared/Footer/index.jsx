// import style from './footer.module.css';

function Footer(){
    // const nama = "fathqulrizqi";
    const currentYear = new Date().getFullYear();
    return (
      <>
        <footer className="bg-gray-800 text-white py-4">
          {/* <p>Copyright @{nama}</p> */}
          <p className="text-center">Copyright &copy; Fathqulrizqi - {currentYear}</p>
        </footer>
      </>
    );
  }

export default Footer