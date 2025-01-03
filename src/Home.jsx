import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx'
import Main from './components/Main.jsx';

function Home(){ 
    return(
        <>
        <Header /> 
        <Main tech="React-Vite" btn="Belajar React"/>
        <Footer />
        </>
    );
}

export default Home
// export { Header, Main, Footer }