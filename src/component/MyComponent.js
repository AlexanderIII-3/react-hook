import React from "react";
import ListUser from "./ListUser";
import { useState } from 'react';


const MyComponent = () => {
    const [name, setName] = useState('');
    const [appear, setAppear] = useState(false);
    const [list, setList] = useState([
        { name: 'Anh', age: '25' },
        { name: 'Alex', age: '25' },
        { name: 'Adam', age: '23' },

    ])

    const handleChange = (event, id) => {
        let copyState = '';
        copyState = event.target.value
        setName(copyState)
    };
    const handleHover = (event) => {

        setAppear(!appear)

    }
    return (
        <>
            <h1> Heloo mother fucker : {name}</h1>
            <input


                onChange={(event) => { handleChange(event) }}></input>
            <button onMouseOver={handleHover}>click tao</button>
            {appear === true ? <div>the anh dep trao</div> : ''
            }

            <hr></hr>
            <ListUser listUser={list} />
        </>

    )
};
// class MyComponent extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         name: '',
//     //         appear: false,
//     //         list: [
//     //             { name: 'Anh', age: '25' },
//     //             { name: 'Alex', age: '25' },
//     //             { name: 'Adam', age: '23' },

//     //         ]

//     //     }
//     // }
//     // componentDidMount = () => {
//     //     // change tile when loading another page
//     //     document.title = "The Anh"
//     // }




//     render() {
//         console.log('check state name', this.state.name)

//     }

// };
export default MyComponent;
