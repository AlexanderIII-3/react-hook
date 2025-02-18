
import ModalCreateUser from './ModalCreateUser'
import './ManageUser.scss';
import { AiTwotonePlusCircle } from "react-icons/ai";
import TableUser from './TableUser';
import { useState, useEffect } from "react";
import { getAllUsers } from "../../../services/userService";
const ManageUser = (props) => {

    const [show, setShow] = useState(false);


    const [listUser, setListUser] = useState([]);
    useEffect(() => {
        getAllUser()


    }, [])
    const getAllUser = async () => {
        let res = await getAllUsers()
        if (res.EC === 0) {
            setListUser(res.DT)

        } else {
            return
        }
    }


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
                    <TableUser listUser={listUser} />
                </div>
                <ModalCreateUser
                    show={show}
                    setShow={setShow}
                    getAllUser={getAllUser}
                />

            </div>
        </div>
    )
};
export default ManageUser;