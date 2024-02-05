"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  Bookmark,
  Heart,
  HeartIcon,
  MessageCircle,
  MoreVertical,
  Send,
} from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface Comment {
  id: number;
  username: string;
  story?: string;
  comment: string;
  timestamp: string;
  avatar: string;
}

interface FeedItem {
  id: number;
  avatar: string;
  story?: string;
  username: string;
  caption: string;
  timestamp: string;
  post: string;
  likes: number;
  saved: boolean;
  liked?: boolean;
  comments: Comment[];
}

const FeedPosts = () => {
  const feedItems: FeedItem[] = [
    {
      id: 1,
      avatar: "https://source.unsplash.com/200x200/?portrait&1",
      story: "https://source.unsplash.com/400x600/?portrait&1",
      username: "John Doe",
      caption: "Beautiful sunset view! 🌅",
      timestamp: "2d",
      post: "https://source.unsplash.com/800x600/?landscape&1",
      likes: 256,
      saved: false,
      liked: false,
      comments: [
        {
          id: 1,
          username: "Alexis Sparr",
          story: "https://source.unsplash.com/400x600/?portrait&2",
          comment: "Amazing shot!",
          timestamp: "6h",
          avatar: "https://source.unsplash.com/200x200/?portrait&2",
        },
        {
          id: 2,
          username: "Simon Minter",
          story: "https://source.unsplash.com/400x600/?portrait&3",
          comment: "So serene!",
          timestamp: "1d",
          avatar: "https://source.unsplash.com/200x200/?portrait&3",
        },
        {
          id: 3,
          username: "Jaby Koay",
          story: "https://source.unsplash.com/400x600/?portrait&4",
          comment: "Incredible view!",
          timestamp: "12h",
          avatar: "https://source.unsplash.com/200x200/?portrait&4",
        },
      ],
    },
    {
      id: 2,
      avatar: "https://source.unsplash.com/200x200/?portrait&5",
      story: "https://source.unsplash.com/400x600/?portrait&5",
      username: "Achara Kirk",
      caption: "Nature at its best! 🍃",
      timestamp: "1d",
      post: "https://source.unsplash.com/800x600/?landscape&2",
      likes: 124,
      saved: true,
      liked: true,
      comments: [
        {
          id: 1,
          username: "David Hoffman",
          story: "https://source.unsplash.com/400x600/?portrait&6",
          comment: "Absolutely stunning!",
          timestamp: "2h",
          avatar: "https://source.unsplash.com/200x200/?portrait&6",
        },
        {
          id: 2,
          username: "Mary Jane",
          story: "https://source.unsplash.com/400x600/?portrait&7",
          comment: "Love the colors!",
          timestamp: "3d",
          avatar: "https://source.unsplash.com/200x200/?portrait&7",
        },
      ],
    },
    {
      id: 3,
      avatar: "https://source.unsplash.com/200x200/?portrait&11",
      story: "https://source.unsplash.com/400x600/?portrait&11",
      username: "Peter Parker",
      caption: "Exploring new places! 🌍",
      timestamp: "3h",
      post: "https://source.unsplash.com/800x600/?landscape&6",
      likes: 87,
      saved: false,
      comments: [
        {
          id: 1,
          username: "Steve Rogers",
          story: "https://source.unsplash.com/400x600/?portrait&12",
          comment: "Amazing adventure!",
          timestamp: "5h",
          avatar: "https://source.unsplash.com/200x200/?portrait&12",
        },
        {
          id: 2,
          username: "Tony Stark",
          story: "https://source.unsplash.com/400x600/?portrait&13",
          comment: "Wish I could be there!",
          timestamp: "1d",
          avatar: "https://source.unsplash.com/200x200/?portrait&13",
        },
        {
          id: 3,
          username: "Ryan Reynolds",
          story: "https://source.unsplash.com/400x600/?portrait&14",
          comment: "Incredible scenery!",
          timestamp: "8h",
          avatar: "https://source.unsplash.com/200x200/?portrait&14",
        },
      ],
    },
    {
      id: 4,
      avatar: "https://source.unsplash.com/200x200/?portrait&15",
      story: "https://source.unsplash.com/400x600/?portrait&15",
      username: "Jack King",
      caption: "Sunset vibes! 🌇",
      timestamp: "5d",
      post: "https://source.unsplash.com/800x600/?landscape&7",
      likes: 192,
      liked: false,
      saved: true,
      comments: [
        {
          id: 1,
          username: "Joe Weller",
          story: "https://source.unsplash.com/400x600/?portrait&16",
          comment: "Breathtaking!",
          timestamp: "2d",
          avatar: "https://source.unsplash.com/200x200/?portrait&16",
        },
      ],
    },
    {
      id: 5,
      avatar: "https://source.unsplash.com/200x200/?portrait&17",
      story: "https://source.unsplash.com/400x600/?portrait&17",
      username: "Amar Naik",
      caption: "City lights! 🌃",
      timestamp: "1yr",
      post: "https://source.unsplash.com/800x600/?landscape&8",
      likes: 305,
      liked: true,
      saved: false,
      comments: [
        {
          id: 1,
          username: "Yatish Rama",
          story: "https://source.unsplash.com/400x600/?portrait&18",
          comment: "So mesmerizing!",
          timestamp: "3d",
          avatar: "https://source.unsplash.com/200x200/?portrait&18",
        },
        {
          id: 2,
          username: "Salman Khan",
          story: "https://source.unsplash.com/400x600/?portrait&19",
          comment: "City that never sleeps!",
          timestamp: "6mo",
          avatar: "https://source.unsplash.com/200x200/?portrait&19",
        },
      ],
    },
  ];

  const [feedData, setFeedData] = useState(feedItems);
  const [userDetails] = useState({
    id: 1,
    username: "Vivek Khanal",
    avatar: "https://source.unsplash.com/200x200/?portrait&50",
    story: "",
  });
  const [comment, setComment] = useState({
    string: "",
    postId: 0,
  });

  const LikeHandler = (idToUpdate: number) => {
    setFeedData((prevFeedData) =>
      prevFeedData.map((post) =>
        post.id === idToUpdate
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  const SaveHandler = (idToUpdate: number) => {
    setFeedData((prevFeedData) =>
      prevFeedData.map((post) =>
        post.id === idToUpdate
          ? {
              ...post,
              saved: !post.saved,
            }
          : post
      )
    );
  };

  const postCommentHandler = (idToUpdate: number) => {
    if (comment?.string?.trim() === "") {
      return;
    }

    setFeedData((prevFeedData) =>
      prevFeedData.map((post) =>
        post.id === idToUpdate
          ? {
              ...post,
              comments: [
                ...post.comments,
                {
                  id: post.comments.length + 1,
                  username: userDetails.username,
                  story: userDetails.story,
                  comment: comment.string, // Access the comment string from the state
                  timestamp: "Just now", // You can add timestamp logic here
                  avatar: userDetails.avatar,
                },
              ],
            }
          : post
      )
    );

    // Reset the comment state after posting
    setComment({ string: "", postId: 0 });
  };

  return (
    <div className="">
      {feedData.map((singlePost) => {
        return (
          <div
            key={singlePost?.id}
            className="flex flex-col my-5 max-w-[40rem] mx-auto"
          >
            <div className="flex justify-between  px-3">
              <div className="flex flex-1 justify-start items-center  gap-2">
                <Avatar
                  className={` ${
                    singlePost?.story?.length ? "" : "border-2 border-[#4c66f8]"
                  }  rounded-full `}
                >
                  <AvatarImage
                    src={singlePost?.avatar}
                    alt={singlePost?.username}
                    className="rounded-full w-8 h-8"
                  />
                  <AvatarFallback>
                    {singlePost?.username?.split("")[0]}
                  </AvatarFallback>
                </Avatar>
                <h1 className=" text-[0.7rem] ">{singlePost.username}</h1>
              </div>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4 " />
              </Button>
            </div>
            <div className="my-2">
              <Image
                width={600}
                height={600}
                src={singlePost?.post}
                alt={singlePost?.caption}
              />
            </div>
            <Drawer>
              <div className="flex justify-between items-center gap-5  mb-1">
                <div className="flex justify-start items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => LikeHandler(singlePost?.id)}
                  >
                    <Heart
                      className={` ${
                        singlePost?.liked ? "fill-red-500 text-red-500" : ""
                      } h-5 w-5 `}
                    />
                  </Button>

                  <DrawerTrigger className="scale-x-[-1]">
                    <MessageCircle className="h-5 w-5" />
                  </DrawerTrigger>

                  <Button variant="ghost" size="icon">
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
                <div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => SaveHandler(singlePost?.id)}
                  >
                    <Bookmark
                      className={` ${
                        singlePost?.saved ? "fill-gray-100 text-gray-100" : ""
                      } h-5 w-5 `}
                    />
                  </Button>
                </div>
              </div>
              <div className=" text-[0.7rem] px-3">
                <p className=" font-semibold">
                  {singlePost?.likes} {singlePost?.likes > 1 ? "likes" : "like"}
                </p>
                <p className="space-x-2">
                  <span>{singlePost?.username?.split(" ")?.join("_")}</span>
                  <span className="font-light">{singlePost?.caption}</span>
                </p>

                <DrawerTrigger>
                  <p className="text-gray-300 font-light">
                    {singlePost?.comments?.length > 1
                      ? "View all " + singlePost?.comments?.length + " comments"
                      : ""}{" "}
                  </p>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader className="border-b">
                    <DrawerTitle className="text-center">Comments</DrawerTitle>
                  </DrawerHeader>
                  <div className="w-full max-w-[600px] mx-auto">
                    {singlePost?.comments?.map((singleComment) => {
                      return (
                        <div
                          key={singleComment?.id}
                          className="px-5 my-2 flex justify-between gap-2 items-center"
                        >
                          <div className="flex items-strat gap-2 ">
                            <Avatar className={`  rounded-full `}>
                              <AvatarImage
                                src={singleComment?.avatar}
                                alt={singleComment?.username}
                                className="rounded-full w-6"
                              />
                              <AvatarFallback>
                                {singleComment?.username?.split("")[0]}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col   text-[0.7rem]">
                              <div className="space-x-2">
                                <span className="font-semibold">
                                  {singleComment?.username
                                    ?.split(" ")
                                    ?.join("_")}
                                </span>
                                <span className="font-light text-gray-400">
                                  {singleComment?.timestamp}
                                </span>
                              </div>
                              <p className="font-light">
                                {singleComment?.comment}
                              </p>

                              <span className="text-[0.65rem] font-light text-gray-400">
                                Reply
                              </span>
                            </div>
                          </div>
                          <HeartIcon className="w-3" />
                        </div>
                      );
                    })}

                    <div className="flex gap-2 items-end p-5 text-xs">
                      <Avatar className={`  rounded-full `}>
                        <AvatarImage
                          src={userDetails?.avatar}
                          alt={userDetails?.username}
                          className="rounded-full w-6"
                        />
                        <AvatarFallback>
                          {userDetails?.username?.split("")[0]}
                        </AvatarFallback>
                      </Avatar>

                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          postCommentHandler(singlePost?.id);
                          setComment({
                            postId: singlePost?.id,
                            string: "",
                          });
                        }}
                        className="w-full"
                      >
                        <input
                          type="text"
                          className="bg-inherit text-inherit outline-none border-b border-transparent focus:border-gray-500  w-full py-1"
                          placeholder="Add a comment and press enter..."
                          value={
                            comment?.postId === singlePost?.id
                              ? comment?.string
                              : ""
                          }
                          onChange={(e) => {
                            setComment({
                              postId: singlePost?.id,
                              string: e?.target?.value,
                            });
                          }}
                          autoFocus
                        />
                      </form>
                    </div>
                  </div>
                </DrawerContent>

                <p key={singlePost?.comments[0]?.id} className="space-x-2">
                  <span>
                    {singlePost?.comments[0]?.username?.split(" ")?.join("_")}
                  </span>
                  <span className="font-light">
                    {singlePost?.comments[0]?.comment}
                  </span>
                </p>
                <div className="flex gap-2 items-end py-1">
                  <Avatar className={`  rounded-full `}>
                    <AvatarImage
                      src={userDetails?.avatar}
                      alt={userDetails?.username}
                      className="rounded-full w-6"
                    />
                    <AvatarFallback>
                      {userDetails?.username?.split("")[0]}
                    </AvatarFallback>
                  </Avatar>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      postCommentHandler(singlePost?.id);
                      setComment({
                        postId: singlePost?.id,
                        string: "",
                      });
                    }}
                    className="w-full"
                  >
                    <input
                      type="text"
                      className="bg-inherit text-inherit outline-none border-b border-transparent focus:border-gray-500  w-full py-1"
                      placeholder="Add a comment and press enter..."
                      value={
                        comment?.postId === singlePost?.id
                          ? comment?.string
                          : ""
                      }
                      onChange={(e) => {
                        setComment({
                          postId: singlePost?.id,
                          string: e?.target?.value,
                        });
                      }}
                      autoFocus
                    />
                  </form>
                </div>
                <p className="text-gray-300 font-light">
                  {singlePost?.timestamp}
                </p>
              </div>
            </Drawer>
          </div>
        );
      })}
    </div>
  );
};

export default FeedPosts;
