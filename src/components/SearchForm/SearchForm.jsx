import { Filter, Field } from "./SearchForm.styled";
import { CardButton } from "components/VehicleCard/VehicleCard.styled";
import { useState } from "react";


const SearchForm = () => {
  const [price, setPrice] = useState("null");
  const [name, setName] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");
  

  const handleSumbit = (e) => {
    e.preventDefault();
    const { name, price, minMileage, maxMileage } = e.target.elements;
  };

  const handleChange = e => {
    e.preventDefault()
    console.log(e.target.value);
    setName(e.target.value)
  }

  return (
       <Filter>
      <label htmlFor="name">Car brand</label>
      <Field
        type="text"
        placeholder="Enter the text"
        id="name"
        name={name}
        value={name}
        autoComplete="off"
          onInput={handleChange}
      />
      <label htmlFor="price">Price/ 1 hour</label>
      <select id="price" value={price} onChange={e => setPrice(e.target.value)}>
        <option value={30}>30</option>
        <option value={40}>40</option>
        <option value={50}>50</option>
        <option value={60}>60</option>
        <option value={70}>70</option>
        <option value={80}>80</option>
      </select>
      <label>Сar mileage / km</label>
      <Field type="text" placeholder="From 3,000" name="minMileage" onChange={e => setMinMileage(e.target.value)} value={minMileage}/>
      <Field type="text" placeholder="To 5,500" name="maxMileage" onChange={e => setMaxMileage(e.target.value)} value={maxMileage}/>
      <CardButton type="submit">Search</CardButton>
    </Filter>
  );
};

export { SearchForm };
