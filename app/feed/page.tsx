import FeedPosts from "@/components/custom_ui/FeedPosts";
import StoryCarousel from "@/components/custom_ui/StoryCarousel";
import React from "react";

const FeedPage = () => {
  return (
    <div>
      <StoryCarousel />
      <FeedPosts />
    </div>
  );
};

export default FeedPage;
