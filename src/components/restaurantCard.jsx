const RestarunrantCard = (restarunrant) => {
  const { name, cuisines, cloudinaryImageId, avgRating, locality, costForTwo } =
    restarunrant;
  const waitTime = restarunrant.sla.slaString;
  return (
    <div className="card w-[380px] h-[400px] rounded-[2rem] p-2 m-2 transition-all duration-100 ease-in overflow-hidden text-dark-green hover:p-6 ">
      <div className="img-container h-[200px] relative">
        <img
          className="h-[200px] w-full object-cover rounded-3xl"
          src={import.meta.env.VITE_IMG_CDN_URL + cloudinaryImageId}
        />
        <p className="text-light-gray absolute text-3xl font-extrabold bottom-0 right-3 bg-dark-black/60 px-2 rounded-md">
          {costForTwo}
        </p>
      </div>
      <h2 className="text-2xl font-bold line-clamp-2">{name}</h2>
      <h4 className="rating font-bold text-dark-black text-lg">
        {avgRating} stars | <span>{waitTime}</span>
      </h4>
      <p className="text-lg font-medium mb-2">{locality}</p>
      <p className="cuisines text-lg text-dark-orange overflow-hidden whitespace-nowrap w-80 truncate">
        {cuisines.join(",")}
      </p>
    </div>
  );
};

// Higher Order Component

export const withOpenLabel = (RestarunrantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-light-orange text-light-gray font-bold rounded-lg p-2 z-10 right-0">
          Open
        </label>
        <RestarunrantCard {...props} />
      </div>
    );
  };
};

export default RestarunrantCard;
