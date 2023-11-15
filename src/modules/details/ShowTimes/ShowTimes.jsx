import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMovieShowTimesAPI } from "../../../apis/cinemaAPI";
import { Box, Tab, Tabs, Typography } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  //value =  "BHDStar" , index= "BHDStar"
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const ShowTimes = ({ movieId }) => {
  const [value, setValue] = useState("");
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const { data = {}, isLoading } = useQuery({
    queryKey: ["showtimes", movieId],
    queryFn: () => getMovieShowTimesAPI(movieId),
    enabled: !!movieId,
  });
  console.log("data", data);
  const cinemaSystems = data.heThongRapChieu || [];
  console.log("cinemaSystems", cinemaSystems);

  useEffect(() => {
    if (cinemaSystems.length > 0) {
      setValue(cinemaSystems[0].maHeThongRap);
    }
  }, [cinemaSystems]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
      }}
    >
      ShowTimes
      <Tabs
        orientation="vertical"
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        {cinemaSystems.map((item) => {
          return (
            <Tab
              onClick={() => handleChange(item.maHeThongRap)}
              label={<img src={item.logo} style={{ width: 80 }} />}
              {...a11yProps(item.maHeThongRap)}
            />
          );
        })}
      </Tabs>
      {cinemaSystems.map((item) => (
        <TabPanel value={value} index={item.maHeThongRap}>
          {item.tenHeThongRap}
        </TabPanel>
      ))}
    </Box>
  );
};

export default ShowTimes;
