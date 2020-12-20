import React from 'react';

import CityCard from './CityCard';

const DummyData = [
  {
    name: '서울',
    description: '차로 15분 거리',
    src:
      'https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=720',
  },
  {
    name: '서울',
    description: '차로 15분 거리',
    src:
      'https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=720',
  },
  {
    name: '서울',
    description: '차로 15분 거리',
    src:
      'https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=720',
  },
  {
    name: '서울',
    description: '차로 15분 거리',
    src:
      'https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=720',
  },
  {
    name: '서울',
    description: '차로 15분 거리',
    src:
      'https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=720',
  },
  {
    name: '서울',
    description: '차로 15분 거리',
    src:
      'https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=720',
  },
  {
    name: '서울',
    description: '차로 15분 거리',
    src:
      'https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=720',
  },
  {
    name: '서울',
    description: '차로 15분 거리',
    src:
      'https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=720',
  },
];

const CityCardList = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
      }}
    >
      {DummyData.map(data => (
        <CityCard {...data} />
      ))}
    </div>
  );
};

export default CityCardList;
