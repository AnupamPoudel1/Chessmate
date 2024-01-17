import React from 'react';

const Chessboard = () => {

    const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
    const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

    let board = [];
    for (let j = verticalAxis.length - 1; j >= 0; j--) {
        for (let i = 0; i < horizontalAxis.length; i++) {

            let number = j + i + 2;
            if (number % 2 === 0) {
                board.push(
                    <div className='w-[75px] h-[75px] bg-green'>

                    </div>
                )
            } else {
                board.push(
                    <div className='w-[75px] h-[75px] bg-creamwhite'>

                    </div>
                )
            }
        }
    }

    return (
        <div className='h-[600px] w-[600px] bg-black text-black rounded-xl overflow-hidden grid grid-cols-8 grid-rows-8 boardcss'>
            {board}
        </div>
    )
}

export default Chessboard;
