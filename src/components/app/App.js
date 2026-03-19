import {increment, decrement, random} from "../../store/actions";
import {useDispatch, useSelector} from "react-redux";

const App = () => {
    const counter = useSelector((state) => state);
    const dispatch = useDispatch();

    const rnd = Math.floor(Math.random() * 10);
    return (
        <>
            <h1>{counter}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(random(rnd))}>rnd</button>
        </>
    )
}

export default App;