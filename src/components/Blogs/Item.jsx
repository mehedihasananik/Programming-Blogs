const Item = ({ name, date, delimg, id, imgdata, tags, time, title }) => {
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
          <div className="flex">
            <div>
              <img src={delimg} alt="" />
            </div>
            <div>
              <h3>{name}</h3>
              <p>{date}</p>
            </div>
          </div>
          {/* right */}
          <div>
            <p>{time}</p>
          </div>
        </div>
        {/* title  */}
        <div></div>
        {/* tags & read */}
        <div></div>
      </div>
    </div>
  );
};

export default Item;
