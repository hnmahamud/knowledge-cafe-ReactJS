import React from 'react';

const TimeCart = ({ watchTime }) => {
  return (
    <div className="text-center p-2 mb-4">
      <p className="bg-primaryBgColor text-primaryColor text-xl font-bold px-4 py-5 border border-primaryColor rounded-md">Spent time on read: {watchTime} min</p>
    </div>
  );
};

export default TimeCart;
