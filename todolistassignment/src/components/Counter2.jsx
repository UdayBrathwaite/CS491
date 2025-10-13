import { useState } from "react"

const Counter2 = (props) => {
    //Declare a new state variable, which we will call 'count'

    const [count, setCount] = useState(0);

    return (
        <div>
            <div>My Counter2</div>
            <button onClick={() => {if (count != 0) setCount(count - 1)}}>
                -
            </button>
            {count}
            <button onClick={() => setCount(count + 1)}>
                +
            </button>
        </div>
    );
}

export default Counter2;