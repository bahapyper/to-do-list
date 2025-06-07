import { useState } from 'react'

function Ternary (){
  const isDarkMod =true


  return (
  <div>
    <p>{isDarkMod ? "🛌 карангы режим" : "🌞жарык режим"}</p>
  </div>
  )
}

export default App
