/* eslint-disable react/prop-types */
import { BsBookmark } from "react-icons/bs";
import { addToCart } from "../../app/features/cartSlice";
import { useDispatch } from "react-redux";

const Item = ({ name, date, delimg, id, imgdata, tags, time, title }) => {
  const dispatch = useDispatch();

  const handleAddCart = () => {
    let items = { name, date, delimg, id, imgdata, tags, time, title };
    dispatch(addToCart(items));
  };

  return (
    <div>
      {/* main div */}
      <div>
        {/* img */}
        <div className="max-w-2xl">
          <img src={imgdata} alt="" />
        </div>
        {/* profile div */}
        <div className="flex justify-between items-center max-w-2xl">
          {/* left */}
          <div className="flex justify-center items-center py-2 gap-x-4">
            <div>
              <img src={delimg} alt="" />
            </div>
            <div>
              <h3>{name}</h3>
              <p>{date}</p>
            </div>
          </div>
          {/* right */}
          <div className="flex items-center space-x-2">
            <p>{time}</p>
            <button onClick={() => handleAddCart()}>
              <BsBookmark />
            </button>
          </div>
        </div>
        {/* title  */}
        <div className="py-4">
          <h3 className="text-3xl max-w-xl leading-10 font-semibold">
            {title}
          </h3>
        </div>
        {/* tags & read */}
        <div className="py-3">
          <h3>{tags}</h3>
          <button className="text-blue-500 text-base  border-b border-b-blue-400">
            Mark as read
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
