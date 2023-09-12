import { useSelector } from "react-redux";
import ReadingTime from "./ReadingTime";

const Bookmarks = () => {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <div>
      <ReadingTime />
      <div>
        <h3 className="text-2xl">Bookmarked Blogs</h3>
        <div>
          {cartItems.map((item) => {
            return <h3 key={item.id}>{item.title}</h3>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
