import React from 'react';

function CityCard({ src, name, description }) {
  return (
    <div
      style={{
        display: 'flex',
        fontSize: '16px',
        alignItems: 'center',
        lineHeight: '20px',
      }}
    >
      <span
        style={{
          flex: '0 0 72px',
          height: 72,
          marginRight: '12px',
        }}
      >
        <img
          src={src}
          alt=""
          style={{ height: '100%', width: '100%', borderRadius: '12px' }}
        />
      </span>
      <span style={{ display: 'flex', flexWrap: 'wrap', flexGrow: 1 }}>
        <span style={{ flex: '0 1 100%' }}>
          <b>{name}</b>
        </span>
        <span style={{ flex: '0 1 100%' }}>{description}</span>
      </span>
    </div>
  );
}

export default CityCard;
