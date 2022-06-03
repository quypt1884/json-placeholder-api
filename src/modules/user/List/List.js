import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser, getListUser} from '../../../store/SliceUser';
import { Modal, Button } from 'antd';

const List = () => {
  const {users, totalLenght} = useSelector(state => state.users);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState({
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });
  const dispatch = useDispatch();
  const getData = useCallback(() => {
    dispatch(getListUser());
  }, [dispatch]);
  useEffect(() => {
    getData();
  }, [getData, totalLenght]);

  const handleClickDelete = (item) => {
    setSelectedUser(item);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    dispatch(deleteUser(selectedUser.id));
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
        <Link
            to={"/users/add"}
            className="btn btn-outline-primary .text-primary"
          >
            Add user
          </Link>
          <table className='table'>
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Website</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
            {
            users && users.map( user => 
              {
                return (
                  <tr
                    key={user.id}
                    className="my-0"
                  >
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>{user.website}</td>
                    <td>
                      <Link
                        to={"/users/" + user.id}
                        className="btn btn-outline-primary"
                      >
                        Detail
                      </Link>

                      <Link
                        to={"/users/edit/" + user.id}
                        className="btn btn-outline-warning mx-3"
                      >
                        Edit
                      </Link>
                      
                      <Button className='btn btn-outline-danger' onClick={()=>handleClickDelete(user)}>
                        Delete
                      </Button>
                      <Modal title="Xác nhận xóa" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        Bạn chắc chắn xóa
                      </Modal>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
    </div>
  );
}

export default List