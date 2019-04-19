

export const actionSquare = {
    type: 'SET_SQUARES',
    counter: 0
};

export const delSquare = {
    type: 'DELETE',
    counter: 0
}


export function onIncrement() {
    return{
        type: 'SET_SQUARES',
    }
}

export function onDecrement() {
    return{
        type: 'DELETE',
    }
}

export const initialState = 0;


export default function(state = initialState, action) {
    switch (action.type) {
        case 'SET_SQUARES':
            return state + 1;
        case 'DELETE':
            if (state > 0) {
                return state - 1;
            };
        default:
            return state;
    }
}