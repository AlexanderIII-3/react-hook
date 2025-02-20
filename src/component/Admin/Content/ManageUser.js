
import ModalCreateUser from './ModalCreateUser'
import './ManageUser.scss';
import { AiTwotonePlusCircle } from "react-icons/ai";
import TableUser from './TableUser';
import { useState, useEffect } from "react";
import { getAllUsers } from "../../../services/userService";
import ModalUpdateUser from './ModalUpdateUser';
const ManageUser = (props) => {

    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)
    const [dataUpdateUser, setDataUpdateUser] = useState({})
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
    const handleClickBtnUpdateUser = (user) => {
        setDataUpdateUser(user)
        setShowModalUpdateUser(true);
    };


    return (
        <div className="manage-user-container">

            <div className="title">
                Manage User
            </div>
            <div className="user-content">
                <div className='btn-add-new'>
                    <button
                        onClick={() => { setShowModalCreateUser(true) }}

                        className='btn btn-primary' >
                        <AiTwotonePlusCircle size={'1em'} />  Add New User</button>
                </div>
                <div className="table-user-container">
                    <TableUser
                        handleClickBtnUpdateUser={handleClickBtnUpdateUser}
                        listUser={listUser} />
                </div>
                <ModalCreateUser
                    showModalCreateUser={showModalCreateUser}
                    setShowModalCreateUser={setShowModalCreateUser}
                    getAllUser={getAllUser}
                />
                <ModalUpdateUser
                    setShowModalUpdateUser={setShowModalUpdateUser}
                    showModalUpdateUser={showModalUpdateUser}
                    dataUpdateUser={dataUpdateUser}

                />

            </div>
        </div>
    )
};
export default ManageUser;