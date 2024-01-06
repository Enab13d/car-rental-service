import { Filter, Field, FormWrapper, Select, FieldWrapper } from "./SearchForm.styled";
import { CardButton } from "components/VehicleCard/VehicleCard.styled";
import {
    DropDownContainer, DropDownHeader, DropDownListContainer, DropDownList, ListItem, ExpandDropdownBtn, DropdownIcon
} from './Dropdown.styled'
import { useState } from "react";
import { makes, prices } from "assets/makes";
import sprite from "../../constants/icons/symbol-defs.svg";
const SearchForm = () => {
  const [isOpen, setIsOpen] = useState(false);
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
  const toggle = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen);
  }

  return (
    <FormWrapper>
      <Filter>
        <DropDownContainer>
          <ExpandDropdownBtn onClick={toggle}>
            <DropdownIcon>
              {!isOpen && <use href={sprite + "#icon-chevron-down"}></use>}
              {isOpen && <use href={sprite + "#icon-chevron-up"}></use>}
            </DropdownIcon>
          </ExpandDropdownBtn>
          <DropDownHeader>Car Brand</DropDownHeader>
          {isOpen && <DropDownListContainer>
            <DropDownList>

          {makes.map((make) => (
            <ListItem>{make}</ListItem>
          ))}

            </DropDownList>
          </DropDownListContainer>}
</DropDownContainer>

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
