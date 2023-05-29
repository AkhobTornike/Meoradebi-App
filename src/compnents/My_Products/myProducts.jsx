import React from 'react'
import Header from '../Header/Header';
import { useState } from 'react'

import { Link } from 'react-router-dom';


const MyProducts = () => {
    const storedData = JSON.parse(localStorage.getItem("productsData"));
    const lastItemId = storedData ? storedData[storedData.length - 1].id : 20;
    const [counter, setCounter] = useState(lastItemId);

    const [newdata, setNewdata] = useState({
        id: "",
        name: "",
        title: "",
        price: "",
        description: "",
        image: "",
      });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file' && files.length > 0) {
          const file = files[0];
          const reader = new FileReader();
          reader.onload = (event) => {
            setNewdata((prevData) => ({
              ...prevData,
              [name]: event.target.result,
            }));
          };
          reader.readAsDataURL(file);
        } else {
          setNewdata((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        }
      };
    
      console.log(storedData)

      const AddNew = () => {
        const updatedData = [
          ...storedData,
          {
            ...newdata,
            id: counter + 1,
          },
        ];
        setCounter(counter + 1);
        console.log(updatedData);
        localStorage.setItem('productsData', JSON.stringify(updatedData));
        alert("new product is Add")

      };

  return (
    <>
        <Header/>
        <h3>Name</h3>
        <input
          type="text"
          name="name"
          value={newdata.name}
          onChange={handleChange}
        />
        <h3>description</h3>
        <input
          type="text"
          name="description"
          value={newdata.description}
          onChange={handleChange}
        />
        <h3>title</h3>
        <input
          type="text"
          name="title"
          value={newdata.title}
          onChange={handleChange}
        />
        <h3>price</h3>
        <input
          type="text"
          name="price"
          value={newdata.price}
          onChange={handleChange}
        />
        <h3>image</h3>
        <input
          type="file"
          name="image"
        //   value={newdata.image}
          onChange={handleChange}
        /><br/>
        <Link to='/browse'>
          <input onClick={() => AddNew()} type="button" value="Submit" />
        </Link>
    </>
  )
}


export default MyProducts