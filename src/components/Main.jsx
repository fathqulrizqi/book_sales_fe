import Button from "./Button";

export default function Main(props){
    const { tech, btn } = props;
    return (
      <>
        <main>
          <h1>Halo, saya sedang belajar {tech}</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, fugit!</p>
          <Button text={btn}/>
          {/* <button>Read More</button> */}
        </main>
      </>
    );
  }

