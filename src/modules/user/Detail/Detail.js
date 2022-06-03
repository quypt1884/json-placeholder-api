import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import Services from '../../../helpers/Services'

const Detail = () => {
  const initialUserState = {
    id: null,
    name: "",
    address:
    {
      city: "",
      geo:{
          lat: "",
          lng: ""
        },
      street: "",
      suite: "",
      zipcode: ""
    },
    
    company:
      {
        bs: "",
        catchPhrase: "",
        name: ""
      },
    email: "",
    phone: "",
    username: "",
    website: "",
  };
  const {id} = useParams()
  const [currentUser, setCurrentUser] = useState(initialUserState);
  const getUserById = id => {
    Services.get(id)
      .then(response => {
        setCurrentUser(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getUserById(id);
  }, [id]);

  return (
    <div className='d-flex justify-content-center align-items-center'>
      <table>
      <tr>
        <td colSpan={2}><h1 className='text-center'>Detail User </h1></td>
      </tr>
      <tbody>
        <tr>
          <td className='fw-bold' width={100}>id:</td>
          <td>{currentUser.id}</td>
        </tr>
        <tr>
          <td className='fw-bold'>Name:</td>
          <td>{currentUser.name}</td>
        </tr>
        <tr>
          <td className='fw-bold'>UserName:</td>
          <td>{currentUser.username}</td>
        </tr>
        <tr>
          <td className='fw-bold'>Address:</td>
          <td>{currentUser.address.street},{currentUser.address.suite},{currentUser.address.city}</td>
        </tr>
        <tr>
          <td className='fw-bold'>Phone:</td>
          <td>{currentUser.phone}</td>
        </tr>
        <tr>
          <td className='fw-bold'>Website:</td>
          <td>{currentUser.website}</td>
        </tr>
        <tr>
          <td className='fw-bold'>Company:</td>
          <td>{currentUser.company.companyName}</td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}

export default Detail