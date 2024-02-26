import React, { useState } from 'react';
import { Form, FormGroup, Button } from 'reactstrap';

import './CreateTour.css'; // Import your CSS file
import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../utils/config';
import { useNavigate } from 'react-router-dom';

export default function CreateTour() {
  const [formdata, setFormdata] = useState({
    title: '',
    city: '',
    address: '',
    distance: 0,
    photo: '',
    desc: '',
    price: 0,
    maxGroupSize: 0,
    featured: false,
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch(`${BASE_URL}/tours/`, {
        method: 'POST',
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
          <input type="text" placeholder="Title" required id="title" onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <input type="text" placeholder="City" required id="city" onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <input type="text" placeholder="Address" required id="address" onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <input type="number" placeholder="Distance" required id="distance" onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <input type="text" placeholder="Photo" required id="photo" onChange={handleChange} />
        </FormGroup>
       
        <FormGroup>
          <input type="number" placeholder="Price" required id="price" onChange={handleChange} />
        </FormGroup>
        <FormGroup>
  <input type="text" placeholder="desc" required id="desc" onChange={handleChange} />
</FormGroup>
<FormGroup>
  <input type="number" placeholder="MaxGroupSize" required id="maxGroupSize" onChange={handleChange} />
</FormGroup>

        <FormGroup check>
          <label>
            Featured:
            <input
              type="checkbox"
              id="featured"
              checked={formdata.featured}
              onChange={handleChange}
            />
          </label>
        </FormGroup>
        <Button className="btn secondary__btn auth__btn" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
