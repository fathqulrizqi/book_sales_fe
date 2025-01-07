// import Contact from './components/shared/Contact/index.jsx';
// import Hero from './components/shared/Hero/index.jsx';
// import Team from './components/shared/Team/index.jsx';
// import Button from './components/ui/Button/index.jsx';
// import Header from './components/Header.jsx'
// import Main from './components/Main.jsx';
// import Login from './pages/login/index.jsx';
// import Register from './pages/register/index.jsx';
import Header from './components/shared/Header/index.jsx';
import Footer from './components/shared/Footer/index.jsx';
import Author from './pages/author/index.jsx';
import Genre from './pages/Genre/index.jsx';


function Home(){ 
    return(
        <>
        {/* {/* <Header />  */}
        {/* <Main tech="React-Vite" btn="Belajar React"/> */}
        {/* <Button /> */}
        {/* <Team /> */}
        {/* <Contact /> */}
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <Hero /> */}
        <Header />
        <Author />
        <Genre />
        <Footer />
        </>
    );
}

export default Home
// export { Header, Main, Footer }