import Blog from "./Blog";
import Bookmarks from "./Bookmarks";
/* eslint-disable react/prop-types */

const Blogs = ({ cardData }) => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between w-full">
        <div className="w-[60%]">
          <Blog cardData={cardData} />
        </div>
        <div className="w-[40%]">
          <Bookmarks />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
