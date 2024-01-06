import { VehicleCatalog } from "components/VehicleCatalog";
import { SectionWrapper } from "components/VehicleCatalog/VehicleCatalog.styled";
import { SearchForm } from "components/SearchForm";
import { useSelector, useDispatch } from "react-redux";
import {
  selectIsLoading,
  selectError,

} from "features/cars/selectors";





const CatalogPage = () => {

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
    {isLoading && <h1>Loading, please wait...</h1>}
      <SectionWrapper>
      <SearchForm/>
        <VehicleCatalog />
      </SectionWrapper>
    </>
  );
};
export default CatalogPage;
