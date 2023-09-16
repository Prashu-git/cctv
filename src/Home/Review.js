import React from "react";

const Review = () => {
  const reviews = [
    {
      name: "John Doe",
      rating: 5,
      comment: "Great product, I love it!",
    },
    {
      name: "Jane Smith",
      rating: 4,
      comment: "Good quality and fast shipping.",
    },
    {
      name: "Jane Smith",
      rating: 4,
      comment: "Good quality and fast shipping.",
    },
    {
      name: "Jane Smith",
      rating: 4,
      comment: "Good quality and fast shipping.",
    },
    {
      name: "Jane Smith",
      rating: 4,
      comment: "Good quality and fast shipping.",
    },
    // Add more reviews here
  ];

  // Display only 4 or 5 reviews, depending on how many are available
  const visibleReviews = reviews.slice(0, 5);

  return (
    <div className="bg-gray-100 py-8 w-full">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl text-center font-semibold text-gray-900 mb-4 underline">
          Customer Reviews
        </h1>
        <div className="flex space-x-4 overflow-x-auto">
          {visibleReviews.map((review, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-start"
              style={{ flex: "0 0 auto", minWidth: "300px" }}
            >
              <h3 className="text-lg font-semibold">{review.name}</h3>
              <div className="flex mt-2">
                {Array.from({ length: review.rating }, (_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    aria-hidden="true"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-5 h-5 text-yellow-300"
                    viewBox="0 0 22 20"
                  >
                    <path d="M12 2c-.2 0-.4.08-.55.23l-3.45 3.45-4.5.66a1 1 0 00-.55 1.7l3.3 3.21-1 4.51a1 1 0 001.45 1.05L12 15.33l4.29 2.55a1 1 0 001.45-1.05l-1-4.5 3.3-3.21a1 1 0 00-.55-1.7l-4.5-.66-3.45-3.45a1 1 0 00-.7-.29z " />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mt-2">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
