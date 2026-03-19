const initialState = 1;

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'RANDOM':
            return state * action.payload;
        default: return state;
    }
}
