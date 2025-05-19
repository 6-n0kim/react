import React, { useEffect, useState } from 'react'
import AutoCount from './AutoCount';

const UseEffect = () => {

    const plusCount = (num) => {
        setCount(count + num);
    }

    const handleInputChange = (e) => {
        setName(e.target.value);
    }

    const [count, setCount] = useState(0)
    const [name, setName] = useState('1');

    //useEffect(() => {} ,[dependency array(의존성 배열)]) //의존성 배열의 값이 변경될 때 함수 실행

    // useEffect(() => {
    //     console.log('초기 렌더링, 업데이트 시 렌더링')
    // })//의존성 배열이 없을 때

    // useEffect(() => {
    //     console.log('count가 업데이트 될 때 실행');
    // }, [count])

    // useEffect(() => {
    //     console.log('name이 업데이트 될 때 실행');
    // }, [name])

    // useEffect(() => {
    //     console.log('count와 name이 업데이트 될 때 실행');
    // }, [count,name])

    const [showCount, setShowCount] = useState(false);

    useEffect(() => {
        console.log('초기 화면 렌더링 될 때 한번 실행');
    }, [])

    return (
        <div>
            <div>
                <span>Count : {count}</span>
                <button onClick={() => plusCount(1)}>Plus</button>

            </div>
            <div>
                <input type='text' value={name} onChange={handleInputChange} />
            </div>
            <div>
                {showCount && <AutoCount />}
                <button onClick={() => setShowCount(!showCount)}>{showCount ? 'True' : 'False'}</button>
            </div>
        </div>
    )
}
export default UseEffect