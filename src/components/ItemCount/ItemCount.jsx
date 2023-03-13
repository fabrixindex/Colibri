import React, {useState} from 'react'

export default function ItemCount() {

    const [count, setCount] = useState(0);

    function handleAdd(){
        () => setCount(count+1)
    }

    function hadleSubstract(){
    }

  return (
    <div>
        <button>-</button>
        <span> {count} </span>
        <button onClick={ ()=> setCount(count+1)}>+</button>
    </div>
  )
}
