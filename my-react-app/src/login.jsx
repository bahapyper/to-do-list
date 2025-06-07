import { useState } from "react";

function Unique_keys(){
    const [task, settask]=useState([{task:'Do homeworks', completed: false}])
    const[value, setValue]=useState('')
     const[text, setText]=useState('')
     return(
        <div>

            <input type="text" oneChenge={(e)=>setValue(e.target.value)} /> <button oneClick={()=> {
                Text(value)
                Tasks([ ...tasks,(task:text,completed)])
            }}
        </div>
     )
}
export default Login