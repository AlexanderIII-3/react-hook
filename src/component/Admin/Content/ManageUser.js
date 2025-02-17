
import ModalCreateUser from './ModalCreateUser'
import './ManageUser.scss';
import { AiTwotonePlusCircle } from "react-icons/ai";
import { useState } from 'react';

const ManageUser = (props) => {

    const [show, setShow] = useState(false);


    return (
        <div className="manage-user-container">

            <div className="title">
                Manage User
            </div>
            <div className="user-content">
                <div className='btn-add-new'>
                    <button
                        onClick={() => { setShow(true) }}

                        className='btn btn-primary' >
                        <AiTwotonePlusCircle size={'1em'} />  Add New User</button>
                </div>
                <div className="table-user-container">
                    table user
                </div>
                <ModalCreateUser
                    show={show}
                    setShow={setShow}
                />

            </div>
        </div>
    )
};
export default ManageUser;