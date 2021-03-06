import { useEffect, useState } from 'react';

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

const useCitys = () => {
  const [citys, setCitys] = useState([]);

  useEffect(() => {
    const getCitys = async () => {
      await new Promise(resolve => {
        setTimeout(() => {
          resolve(DummyData);
        }, 300);
      }).then(setCitys);
    };

    getCitys();
  }, []);

  return [citys];
};

export default useCitys;
