import { faBookmark as bookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as bookmarkSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SingleBlog = ({ singleData, handleRead, handleBookmark }) => {
  const { id, cover_image, author_image, author_name, publish_date, read_time, blog_title, tags, bookmark } = singleData;
  return (
    <div className="card card-compact bg-base-100 rounded-none border-b-2 mb-4">
      <div className="flex justify-center align-middle p-2">
        <img className="h-96 w-full rounded-md" src={cover_image} alt="" />
      </div>

      <div className="flex justify-between p-2 mb-4">
        <div className="flex align-middle gap-4">
          <img className="w-10 h-10 rounded-full" src={author_image} />
          <div className="text-sm">
            <p className="font-bold">{author_name}</p>
            <p className="text-gray-400 font-semibold">{publish_date}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <p className="flex gap-4 text-gray-400 text-sm font-semibold">{read_time} min read</p>
          <p>
            <button onClick={() => handleBookmark(id)} type="button">
              {bookmark ? <FontAwesomeIcon icon={bookmarkSolid} /> : <FontAwesomeIcon icon={bookmarkRegular} />}
            </button>
          </p>
        </div>
      </div>

      <div className="p-2">
        <h2 className="card-title font-bold">{blog_title}</h2>
        <div className="flex gap-4 text-gray-400 text-sm font-semibold">
          {tags.map((tg, index) => <p key={index}>{tg}</p>)}
        </div>
      </div>

      <div className="p-2 mb-4">
        <button onClick={() => handleRead(id)} className="text-primaryColor font-semibold border-primaryColor border-b-2 hover:text-blue-800 hover:border-blue-800" type="button">Make as read</button>
      </div>
    </div>
  );
};

export default SingleBlog;
