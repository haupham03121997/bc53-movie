import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetailsAPI } from "../../../apis/movieApi";

const MovieProfile = ({ movieId }) => {
  const { data = {}, isLoading } = useQuery({
    queryKey: ["movie-details", movieId],
    queryFn: () => getMovieDetailsAPI(movieId),
    enabled: !!movieId, // false | true, Khi enabled là true thì queryFun mới được kích hoạt. Ngược lại là false thì sẽ không kích hoạt queryFn
    retry: 3,
  });

  // useEffect(() => {
  //   // được gọi lại khi user hoặc count thay đổi
  // }, [user, count]);
  console.log("Data", data);

  return <div>MovieProfile</div>;
};

export default MovieProfile;
