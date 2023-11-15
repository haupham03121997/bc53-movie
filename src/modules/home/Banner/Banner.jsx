import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getBannersAPI } from "../../../apis/movieApi";
import Slider from "react-slick";
import { Box, Skeleton } from "@mui/material";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000, // 3 giây
};
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
  if (isLoading) {
    return (
      <Skeleton variant="rectangular" sx={{ height: 500 }} animation="wave" />
    );
  }
  return (
    <div>
      <Slider
        // dot={settings.dots}
        // infinite={settings.infinite}
        // speed={settings.speed}
        // slidesToShow={settings.slidesToShow}
        // slidesToScroll={settings.slidesToScroll}
        {...settings}
      >
        {data.map((item) => {
          return (
            <Box sx={{ height: 550 }}>
              <img
                src={item.hinhAnh}
                width="100%"
                style={{ objectFit: "cover" }}
              />
            </Box>
          );
        })}
      </Slider>
    </div>
  );
};

export default Banner;
