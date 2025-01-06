import Contact from './components/shared/Contact/index.jsx';
import Footer from './components/shared/Footer/index.jsx';
import Header from './components/shared/Header/index.jsx';
import Team from './components/shared/Team/index.jsx';
// import Button from './components/ui/Button/index.jsx';
// import Header from './components/Header.jsx'
// import Main from './components/Main.jsx';

function Home(){ 
    return(
        <>
        {/* {/* <Header />  */}
        {/* <Main tech="React-Vite" btn="Belajar React"/> */}
        {/* <Button /> */}

        <Header />
        <Team />
        <Contact />
        <Footer />
        </>
    );
}

export default Home
// export { Header, Main, Footer }