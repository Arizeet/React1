//JSX version of Hello component

import React from "react";

const Hello = () => {
    //this 1 is JSX approach
    // return(
    //     <div className='dummyClass'>
    //         <h1>Hello Purvi.!!</h1>
    //     </div>
    // )

    //this 1 is not JSX approach
    return React.createElement(
        'div',
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h1', null, 'Hello Purvi.!')
    )
}

export default Hello