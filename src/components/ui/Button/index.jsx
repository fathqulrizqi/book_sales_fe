// css in js
// const styles = {
//     backgroundColor: "lightskyblue",
//     padding: "10px 20px",
//     border: "none",
//     borderRadius: "5px"
// }
export default function Button(props){
    return (
        <button className="flex mx-auto bg-blue-500 hover:bg-blue-700 active:bg-blue-900 font-bold rounded text-white py-2 px-4">{props.txt}</button>
    )
}
