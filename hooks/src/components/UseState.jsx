import React, { useState } from 'react'

const UserState = () => {
    //useState는 화면이 변경될 때마다(함수가 실행되고 렌더링이 다시 될 때마다) 변경되는 상태 데이터를 컨트롤한다.
    // const [상태 데이터, 상태 데이터 변경 함수] = useState(초기값)
    const [count, setCount] = useState(0);
    const [names, setNames] = useState(['김준영']);
    const [input, setInput] = useState('');

    const handleCount = (num) => {
        setCount(count + num)
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleUpload = () => {
        setNames((prev) => {
            console.log(prev);
            return [input, ...prev];
        })//콜백 함수로 기준 상태를 누적할 수 있다.
    }

    return (
        <div>
            <h3>Count : {count}</h3>
            <button onClick={() => handleCount(1)}>Count Up</button>
            <button onClick={() => handleCount(-1)}>Count Down</button>
            <br />
            <br />

            <input type="text" value={input} onChange={handleInputChange} />
            <button onClick={handleUpload}>Update</button>
            {names.map((name, idx) => {
                return <p key={idx}>{name}</p>
            })}
        </div>
    )
}

export default UserState
