import React from 'react';

import CityCardList from './CityCardList';

export default {
  title: 'Compoennts/CityCardList',
  component: CityCardList,
  decorator: story => <div style={{ width: '100%' }}>{story}</div>,
};

export const basic = args => <CityCardList />;
