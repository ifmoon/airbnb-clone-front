import CityCardList from '../components/CityCardList';
import useCitys from '../hooks/useCitys';

function CityCardContainer() {
  const [citys] = useCitys();

  return <CityCardList citys={citys} />;
}

export default CityCardContainer;
