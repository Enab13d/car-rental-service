import { Filter, Field, FormWrapper, Select, FieldWrapper } from "./SearchForm.styled";
import { CardButton } from "components/VehicleCard/VehicleCard.styled";
import { useState } from "react";
import { makes, prices } from "assets/makes";

const SearchForm = () => {
  const [price, setPrice] = useState("");
  const [make, setMake] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    const { name, price, minMileage, maxMileage } = e.target.elements;
  };

  const handleChange = (e) => {
    e.preventDefault();
    setMake(e.target.value);
  };

  return (
    <FormWrapper>
      <Filter>
        <label htmlFor="make">Car brand</label>
        <Select id="make" name={make} onChange={handleChange} value={make}>
          {makes.map((make) => (
            <option value={make}>{make}</option>
          ))}
        </Select>

        <label htmlFor="price">Price/ 1 hour</label>
        <Select
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        >
          {prices.map((price) => (
            <option value={price}>{price}</option>
          ))}
        </Select>
        <label>Сar mileage / km</label>
        <FieldWrapper>
          <Field
            left
            type="text"
            placeholder="From 3,000"
            name="minMileage"
            onChange={(e) => setMinMileage(e.target.value)}
            value={minMileage}
          />
          <Field
            type="text"
            placeholder="To 5,500"
            name="maxMileage"
            onChange={(e) => setMaxMileage(e.target.value)}
            value={maxMileage}
          />
        </FieldWrapper>
        <CardButton type="submit">Search</CardButton>
      </Filter>
    </FormWrapper>
  );
};

export { SearchForm };
