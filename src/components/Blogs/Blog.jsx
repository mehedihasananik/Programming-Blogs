/* eslint-disable react/prop-types */

import Item from "./Item";

const Blog = ({ cardData }) => {
  return (
    <div>
      {cardData.map((item) => {
        const { id } = item;
        console.log(item);
        return <Item key={id} {...item} />;
      })}
    </div>
  );
};

export default Blog;
