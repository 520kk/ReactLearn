import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);
    //의존성 배열이 있는 형태
    // 카운트값이 바뀔때마다 호출됨.
    useEffect(() => {
        console.log("======================");
        console.log("(의존성 배열이 있는형태) useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    });

    //의존성 배열이 없는 형태
    //Component가 update될때 마다 호출됨.
    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`(의존성배열이 없는형태) Current count value: ${count}`);
    }, [count]);

    return (
        <div style={{ padding: 16 }}>
            <p>{`총 ${count}명 입장 했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{ color: "red" }}>인원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accommodate;