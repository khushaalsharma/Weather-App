import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

const CitySearch = ({onSearchChange}) => {

    const [search, setSearch] = useState("");
    const [searchData, setSearchData] = useState({});

    useEffect(() => {
        const url = `https://nominatim.openstreetmap.org/search?q=${search}}&format=json`;
        fetch(
            url
        )
            .then((response) => response.json())
            .then((response) => {
                if(response.length > 0){
                    const data = {
                        lat : `${response[0].lat}`,
                        lon : `${response[0].lon}`,
                        label : `${response[0].display_name}`,
                    };
                    setSearchData(data);
                }
            })
            .catch(console.error())

    },[setSearchData, search])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(search){
            onSearchChange(searchData);
        }
        else{
            alert("Enter a City")
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId='cityInput'>
                <Form.Label>Enter City </Form.Label>
                <Form.Control type='text' placeholder='Search for city' value={search} onChange={(e) => setSearch(e.target.value)}></Form.Control>
            </Form.Group>
            <br></br>
            <Button variant='primary' type='submit' className='btn btn-primary'>
                Get Weather
            </Button>
        </Form>
    );
}

export default CitySearch;
