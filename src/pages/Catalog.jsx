import Container from '../components/Container/Container';
import Filter from '../components/Filter/Filter';
import CarList from '../components/CarList/CarList';

const Catalog = () => {
  return (
    <Container>
      <h1>catalog page</h1>
      <Filter />
      <CarList />
      {/* <Filter onSubmit={setSearchParams} />
      {car.length ? <CarList car={car} /> : ''} */}
      <p>Load more</p>
    </Container>
  );
};

export default Catalog;
