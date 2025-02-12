import React from 'react';
import { useState } from 'react';
// this is statefull 
// class ListUser extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {

//         }
//     }
//     render() {
//         let { listUser } = this.props;
//         console.log('check data from server', this.props.listUser)

//         return (
//             <>
//                 <div>
//                     {listUser.map((item, index) => {
//                         return (
//                             <div key={index} className={+item.age < 25 ? 'green' : "red"}>
//                                 <span>My name {item.name}</span>
//                                 <span>My age {item.age}</span>
//                             </div>
//                         )
//                     })}
//                 </div>
//             </>
//         )
//     }


// }

// this is stateless: i use functions component to render a page no state  needed 
const ListUser = (props) => {
    const [isShowHideListUser, setIsShowListUser] = useState(true)
    let { listUser } = props;
    const handleShowListUser = () => {
        setIsShowListUser(!isShowHideListUser)
    };
    return (


        <>


            <div>
                <button onClick={() => handleShowListUser()}>
                    {isShowHideListUser === true ? 'Hide List' : 'Show List'}
                </button>

            </div>
            {isShowHideListUser &&
                <>

                    {
                        listUser.map((item, index) => {
                            return (
                                <div className={+item.age < 25 ? 'green' : "red"}>
                                    <span>My name {item.name}</span>
                                    <span>My age {item.age}</span>

                                </div>

                            )
                        })


                    }
                </>
            }






        </>
    )
}
export default ListUser