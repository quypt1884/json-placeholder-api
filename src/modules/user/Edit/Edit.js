import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Services from '../../../helpers/Services';
import { updateUser } from '../../../store/SliceUser';
import { Link } from 'react-router-dom';
import FormGroup from '../../../components/FormGroup';

const Edit = () => {
    const navigate = useNavigate();
    const initialUserState = {
        id: null,
        name: "",
        city: "",
        lat: "",
        lng: "",
        street: "",
        suite: "",
        zipcode: "",
        bs: "",
        catchPhrase: "",
        companyName: "",
        email: "",
        phone: "",
        username: "",
        website: "",
      };
      const {id} = useParams()
    const [user, setUser] = useState(initialUserState);
    const dispatch = useDispatch();
    const getUserById = id => {
        Services.get(id)
        .then(response => {
            setUser(
            {
                id: response.data.id,
                name: response.data.name,
                city: response.data.address.city,
                lat: response.data.address.geo.lat,
                lng: response.data.address.geo.lng,
                street: response.data.address.street,
                suite: response.data.address.suite,
                zipcode: response.data.address.zipcode,
                bs: response.data.company.bs,
                catchPhrase: response.data.company.catchPhrase,
                companyName: response.data.company.companyName,
                email: response.data.email,
                phone: response.data.phone,
                username: response.data.username,
                website: response.data.website,
            }
          );
        })
        .catch(e => {
            console.log(e);
        });
    };

    useEffect(() => {
        getUserById(id);
    }, [id]);

    const handleInputChange = event => {
        const {name, value} = event.target;
        setUser({...user, [name]: value});
    };

    const updateContent = () => {
    const {id, name, city, lng, lat, street, suite,zipcode,bs, catchPhrase, companyName, email, phone, username, website} = user;
    dispatch(updateUser({ 
      id: user.id, 
      data: {
        id,
        name,
        address:
        {
          city,
          geo:{
              lat,
              lng
            },
          street,
          suite,
          zipcode
        },
        company:
          {
            bs,
            catchPhrase,
            companyName
          },
        email,
        phone,
        username,
        website,
      }
    }))
      .unwrap()
      .then(response => {
        navigate('/')
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (   
    <div className="submit-form">
    <h1 className="text-center">Edit User</h1>
    <div className="w-50 mx-auto my-0">
        <div className="row"> 
          <FormGroup for='name' label= 'Name' type="text" id="name" name ="name" value={user.name} onChange={handleInputChange}/>
          <FormGroup for='username' label= 'Username' type="text" id="username" name ="username" value={user.username} onChange={handleInputChange}/>
        </div>

        <div className="row"> 
          <FormGroup for='email' label= 'email' type="text" id="email" name ="email" value={user.email} onChange={handleInputChange}/>
          <FormGroup for='phone' label= 'phone' type="text" id="phone" name ="phone" value={user.phone} onChange={handleInputChange}/>
        </div>

        <div className="row"> 
          <FormGroup for='street' label= 'street' type="text" id="street" name ="street" value={user.street} onChange={handleInputChange}/>
          <FormGroup for='suite' label= 'suite' type="text" id="suite" name ="suite" value={user.suite} onChange={handleInputChange}/>
        </div>

        <div className="row"> 
          <FormGroup for='city' label= 'city' type="text" id="city" name ="city" value={user.city} onChange={handleInputChange}/>
          <FormGroup for='zipcode' label= 'zipcode' type="text" id="zipcode" name ="zipcode" value={user.zipcode} onChange={handleInputChange}/>
        </div>

        <div className="row"> 
          <FormGroup for='lat' label= 'lat' type="text" id="lat" name ="lat" value={user.lat} onChange={handleInputChange}/>
          <FormGroup for='lng' label= 'lng' type="text" id="lng" name ="lng" value={user.lng} onChange={handleInputChange}/>
        </div>

        <div className="row">
          <FormGroup for='companyName' label= 'companyName' type="text" id="companyName" name ="companyName" value={user.companyName} onChange={handleInputChange}/>
          <FormGroup for='catchPhrase' label= 'catchPhrase' type="text" id="catchPhrase" name ="catchPhrase" value={user.catchPhrase} onChange={handleInputChange}/>
        </div>
        
        <div className="row">
          <FormGroup for='bs' label= 'bs' type="text" id="bs" name ="bs" value={user.bs} onChange={handleInputChange}/>
          <FormGroup for='website' label= 'website' type="text" id="website" name ="website" value={user.website} onChange={handleInputChange}/>
        </div>

      <button onClick={updateContent} type="submit" className="btn btn-success mt-3 text-left">
        Update
      </button>
      <Link to='/' className='btn btn-secondary mt-3'>Back</Link>
    </div>
  </div>
  )
}

export default Edit