import {useState} from 'react'

function Home (){
const [contador,setContador] = useState(0)

return (
    <div>
        <h1>primeiro teste</h1>
        <div>{contador}</div>
        <button onClick={()=>setContador(contador+1)}>adiciona</button>
    </div>
)


 }

 export default Home