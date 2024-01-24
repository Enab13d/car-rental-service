import { VehicleCatalog } from "components/VehicleCatalog";
import { SectionWrapper } from "components/VehicleCatalog/VehicleCatalog.styled";
import { useSelector } from "react-redux";
import { selectIsLoading } from "features/cars/selectors";
import { SearchForm } from "components/SearchForm";
const FavoritesPage = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <SectionWrapper>
      {isLoading && <h1>Loading, please wait...</h1>}
      <SearchForm />
      <VehicleCatalog />
    </SectionWrapper>
  );
};

export default FavoritesPage;
