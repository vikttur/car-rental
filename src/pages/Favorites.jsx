import Container from '../components/Container/Container';
import CarList from '../components/CarList/CarList';

const Favorites = () => {
  return (
    <Container>
      <h1>favorites page</h1>
      <CarList />
      {/* <Filter onSubmit={setSearchParams} /> */}
      {/* {car.length ? <CarList car={car} /> : ''} */}
      <p>Load more</p>
    </Container>
  );
};

export default Favorites;
