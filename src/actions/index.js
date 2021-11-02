export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_DISPLAY = "MEMORY_DISPLAY"
export const MEMORY_TOTAL = "MEMORY_TOTAL"
export const MEMORY_CLEAR = "MEMORY_CLEAR"

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return({type:CHANGE_OPERATION, payload: operator});
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY});
}

export const memoryDisplay = () => {
    return({type:MEMORY_DISPLAY});
}

export const memoryTotal = (number) => {
    return({type:MEMORY_TOTAL, payload:number})
}

export const memoryClear = (number) => {
    return({type:MEMORY_CLEAR, payload:number})
}