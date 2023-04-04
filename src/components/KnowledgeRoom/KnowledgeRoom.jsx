import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BookmarkCart from '../BookmarkCart/BookmarkCart';
import PersonalBlog from '../PersonalBlog/PersonalBlog';
import SingleBlog from '../SingleBlog/SingleBlog';
import TimeCart from '../TimeCart/TimeCart';

const KnowledgeRoom = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [watchTime, setWatchTime] = useState(0);
  const [bookmarkData, setBookmarkData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get('data.json');
        const { data } = response;
        setBlogsData(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);

  const handleRead = (blogId) => {
    const blog = blogsData.find((singleBlog) => singleBlog.id === blogId);
    const totalTime = watchTime + (+blog.read_time);
    setWatchTime(totalTime);
  };

  const handleBookmark = (blogId) => {
    const isBookmarked = bookmarkData.find((singleData) => singleData.id === blogId);
    if (!isBookmarked) {
      const newBlogsData = [];
      blogsData.forEach((pd) => {
        if (pd.id === blogId) {
          newBlogsData.push({ ...pd, bookmark: true });
        } else {
          newBlogsData.push({ ...pd });
        }
      });
      setBlogsData(newBlogsData);

      const foundBlogData = blogsData.find((singleBlog) => singleBlog.id === blogId);
      const updateBookmarkData = [...bookmarkData, foundBlogData];
      setBookmarkData(updateBookmarkData);
      // toast('Added the blog as a bookmark!');
    } else {
      toast.error('You have already bookmarked this blog!');
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        <div className="md:col-span-2">
          {blogsData.map((singleData) => (
            <SingleBlog
              key={singleData.id}
              singleData={singleData}
              handleRead={handleRead}
              handleBookmark={handleBookmark}
            />
          ))}
        </div>
        <div className="md:col-span-1">
          <div className="md:sticky md:top-0">
            <TimeCart watchTime={watchTime} />
            <BookmarkCart bookmarkData={bookmarkData} />
            <ToastContainer />
          </div>
        </div>
      </div>

      <PersonalBlog />
    </div>
  );
};

export default KnowledgeRoom;
