const Awesome = ({ restaurant }) => {
  const rating = restaurant?.info?.avgRating;

  if (rating > 4.5) {
    return (
      <div className="absolute top-2 left-2 bg-purple-600 text-yellow-200 px-3 py-1 text-base rounded-lg ring-2 ring-pink-400 shadow-[0_0_10px_2px_rgba(192,132,252,0.6)]">
        Awesome
      </div>
    );
  }

  return null;
};

export default Awesome;
