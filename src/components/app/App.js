import {increment, decrement, random} from "../../store/actions";
import {useDispatch, useSelector} from "react-redux";

const App = () => {
    const counter = useSelector((state) => state);
    const dispatch = useDispatch();

    const rnd = Math.floor(Math.random() * 10);
    return (
        <>
            <h1>{counter}</h1>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button className="btn btn-primary" onClick={() => dispatch(increment())}>+</button>
                <button className="btn btn-primary" onClick={() => dispatch(decrement())}>-</button>
                <button className="btn btn-primary" onClick={() => dispatch(random(rnd))}>rnd</button>
            </div>
        </>
    )
}

export default App;