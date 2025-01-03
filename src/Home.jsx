function Header(){
    return(
        <>
            <header>
                <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                </nav>
            </header>
        </>
    )
}


function Main(props){
  return (
    <>
      <main>
        <h1>Halo, saya sedang belajar {props.tech}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, fugit!</p>
        <button>Read More</button>
        <h3>{props.text}</h3>
      </main>
    </>
  );
}

function Footer(){
    const nama = "fathqulrizqi";
    return (
      <>
        <footer>
          <h2>Copyright @{nama}</h2>
        </footer>
      </>
    );
  }

function Home(){ 
    return(
        <>
        <Header /> 
        <Main tech="Vue" text="Belajar React"/>
        <Footer />
        </>
    );
}

export default Home