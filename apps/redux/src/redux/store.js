import { createStore } from "redux";

const reducer = (currentState, action) => {
    // 첫번째 변수는 초기값, 두번째 변수는 변경할 데이터 액션
    if (currentState === undefined) {
        return {number : 1}
    }
    
    const newState = { ...currentState };//새로운 상태를 생성할 때 기존 상태를 유지하여 누적

    if (action.type == "PLUS") {
        newState.number += 1;
        
    }
    

    return newState;
}
export const store = createStore(reducer);