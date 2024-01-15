import {
  Filter,
  Field,
  FormWrapper,
  FieldWrapper,
  SearchBtn,
  StyledLabel,
} from "./SearchForm.styled";

import {
  DropDownContainer,
  DropDownInput,
  DropDownListContainer,
  DropDownList,
  ListItem,
  ExpandDropdownBtn,
  DropdownIcon,
} from "./Dropdown.styled";
import { useState } from "react";
import { makes, prices } from "assets/makes";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { getFilteredCars } from "features/filter/operations";

const SearchForm = () => {
  const [makeDropdownOpened, setMakeDropdownOpened] = useState(false);
  const [priceDropdownOpened, setPriceDropdownOpened] = useState(false);
  const [price, setPrice] = useState("");
  const [make, setMake] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");
  const dispatch = useDispatch();

  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(getFilteredCars({ price, make, minMileage, maxMileage }));
  };
  const toggleMakeDropdown = (e) => {
    e.preventDefault();
    setMakeDropdownOpened(!makeDropdownOpened);
  };
  const togglePriceDropdown = (e) => {
    e.preventDefault();
    setPriceDropdownOpened(!priceDropdownOpened);
  };

  const handleClick = (e, type) => {
    e.preventDefault();
    type === "make"
      ? setMake(e.target.textContent)
      : setPrice(e.target.textContent);
    type === "make" ? toggleMakeDropdown(e) : togglePriceDropdown(e);
  };

  return (
    <FormWrapper>
      <Filter onSubmit={handleSumbit}>
        <div>
          <StyledLabel htmlFor="make">Car Brand</StyledLabel>
          <DropDownContainer>
            <ExpandDropdownBtn
              onClick={toggleMakeDropdown}
              turnOver={makeDropdownOpened}
            >
              <DropdownIcon />
            </ExpandDropdownBtn>
            <DropDownInput
              placeholder="Enter the text"
              name="make"
              id="make"
              value={make}
              onChange={(e) => setMake(e.target.value)}
              autoComplete="off"
            />
            <DropDownListContainer expand={makeDropdownOpened}>
              <DropDownList expand={makeDropdownOpened}>
                {makes.map((make) => (
                  <ListItem
                    key={nanoid()}
                    onClick={(e) => handleClick(e, "make")}
                  >
                    {make}
                  </ListItem>
                ))}
              </DropDownList>
            </DropDownListContainer>
          </DropDownContainer>
        </div>
        <div>
          <StyledLabel htmlFor="price">Price/ 1 hour</StyledLabel>
          <DropDownContainer>
            <ExpandDropdownBtn
              onClick={togglePriceDropdown}
              turnOver={priceDropdownOpened}
            >
              <DropdownIcon />
            </ExpandDropdownBtn>
            <DropDownInput
              placeholder="To $"
              name="price"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              autoComplete="off"
            />
            <DropDownListContainer expand={priceDropdownOpened}>
              <DropDownList expand={priceDropdownOpened}>
                {prices.map((price) => (
                  <ListItem
                    key={nanoid()}
                    onClick={(e) => handleClick(e, "price")}
                  >
                    {price}
                  </ListItem>
                ))}
              </DropDownList>
            </DropDownListContainer>
          </DropDownContainer>
        </div>

        <div>
          <StyledLabel>Сar mileage / km</StyledLabel>
          <FieldWrapper>
            <Field
              left
              type="text"
              placeholder="From 3,000"
              name="minMileage"
              onChange={(e) => setMinMileage(e.target.value)}
              value={minMileage}
              autoComplete="off"
            />
            <Field
              type="text"
              placeholder="To 5,500"
              name="maxMileage"
              onChange={(e) => setMaxMileage(e.target.value)}
              value={maxMileage}
              autoComplete="off"
            />
          </FieldWrapper>
        </div>
        <SearchBtn type="submit">Search</SearchBtn>
      </Filter>
    </FormWrapper>
  );
};

export { SearchForm };
