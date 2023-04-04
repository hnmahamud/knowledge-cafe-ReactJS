import React from 'react';

const BookmarkCart = ({ bookmarkData }) => {
  return (
    <div className="p-2">
      <div className="bg-primaryBgColor rounded-md">
        <h3 className="text-lg font-bold p-8">Bookmarked Blogs : {bookmarkData.length}</h3>
        {bookmarkData.map((bd, index) => (
          <div key={index} className="px-8 pb-4">
            <p className="bg-white font-semibold p-4 rounded-md">{bd.blog_title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookmarkCart;
