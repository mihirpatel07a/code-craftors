import React, { useEffect, useState } from 'react';
import { Form, FormGroup, Button } from 'reactstrap';

import './CreateTour.css'; // Import your CSS file
import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../utils/config';
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateTour() {

    const { id } = useParams();

    const { data: tour } = useFetch(`${BASE_URL}/tours/${id}`);

    const [formdata, setFormdata] = useState({
      title: tour.title || '',
      city: tour.city || '',
      address: tour.address || '',
      distance: tour.distance || 0,
      photo: tour.photo || '',
      desc: tour.desc || '',
      price: tour.price || 0,
      maxGroupSize: tour.maxGroupSize || 0,
      featured: tour.featured || false,
    });

    useEffect(() => {
      setFormdata({
        title: tour.title || '',
        city: tour.city || '',
        address: tour.address || '',
        distance: tour.distance || 0,
        photo: tour.photo || '',
        desc: tour.desc || '',
        price: tour.price || 0,
        maxGroupSize: tour.maxGroupSize || 0,
        featured: tour.featured || false,
      });
    }, [tour]);
  
      const navigate = useNavigate();
    
     // ...

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    

    const res = await fetch(`${BASE_URL}/tours/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formdata),
    });

    if (!res.ok) {
      const errorData = await res.json(); // Attempt to parse error response
      alert(`Error: ${res.status} - ${errorData.message}`);
    } else {
      // Success
      alert("succesfully updated")
      navigate("/admin/home");
    }
  } catch (err) {
    console.error('Error submitting data:', err);
    alert('Internal Server Error. Please try again later.');
  }
};



      
    
      const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
    
        // Use the type to determine the value based on the input type
        const newValue = type === 'checkbox' ? checked : value;
    
        setFormdata({
          ...formdata,
          [id]: newValue,
         
        });
      };
    
      console.log(formdata);


  return (
    <div className="create-tour-container">
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <input type="text" defaultValue={tour.title} placeholder="Title" required id="title" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <input type="text" placeholder="City" defaultValue={tour.city} required id="city" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <input type="text" placeholder="Address" defaultValue={tour.address} required id="address" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <input type="number" placeholder="Distance" defaultValue={tour.distance} required id="distance" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <input type="text" placeholder="Photo" defaultValue={tour.photo} required id="photo" onChange={handleChange} />
      </FormGroup>
     
      <FormGroup>
        <input type="number" placeholder="Price" defaultValue={tour.price} required id="price" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
<input type="text" placeholder="desc" defaultValue={tour.desc} required id="desc" onChange={handleChange} />
</FormGroup>
<FormGroup>
<input type="number" placeholder="MaxGroupSize" defaultValue={tour.maxGroupSize} required id="maxGroupSize" onChange={handleChange} />
</FormGroup>

      <FormGroup check>
        <label>
          Featured:
          <input
            type="checkbox"
            id="featured"
            checked={formdata.featured}
            onChange={handleChange}
            value={tour.featured}
          />
        </label>
      </FormGroup>
      <Button className="btn secondary__btn auth__btn" type="submit">
        Submit
      </Button>
    </Form>
  </div>
  )
}
