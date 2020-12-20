import React from 'react';

import CityCard from './CityCard';

const CityCardList = ({ citys }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
      }}
    >
      {Array.isArray(citys) && citys.map(data => <CityCard {...data} />)}
    </div>
  );
};

export default CityCardList;
