import React from 'react';

import CityCard from './CityCard';

const DUMMY_IMAGE =
  'https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=720';

export default {
  title: 'Compoennts/City',
  component: CityCard,
};

export const basic = args => <CityCard src={DUMMY_IMAGE} {...args} />;
basic.args = { name: '서울', description: '차로 15분 거리' };
