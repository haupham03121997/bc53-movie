import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getBannersAPI } from "../../../apis/movieApi";

const Banner = () => {
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["banner"],
    queryFn: getBannersAPI,
  });
  console.log("data", data);
  console.log("isLoading", isLoading);
  console.log("isError", isError);
  return (
    <div>
      {data.map((item) => {
        return (
          <img
            src={item.hinhAnh}
            width="100%"
            height={400}
            style={{ objectFit: "cover" }}
          />
        );
      })}
    </div>
  );
};

export default Banner;
