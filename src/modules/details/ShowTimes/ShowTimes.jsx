import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMovieShowTimesAPI } from "../../../apis/cinemaAPI";
import { Box, Button, Stack, Tab, Tabs, Typography } from "@mui/material";
import dayjs from "dayjs";

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
      style={{ width: "100%" }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
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
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {cinemaSystems.map((item) => {
          return (
            <Tab
              label={<img src={item.logo} style={{ width: 80 }} />}
              value={item.maHeThongRap}
            />
          );
        })}
      </Tabs>
      {cinemaSystems.map((item) => (
        <TabPanel value={value} index={item.maHeThongRap}>
          {/* display: flex 
              flex-direction: column,
              gap : 3
          */}
          {/* <Stack direction="column" spacing={3} sx={{ width: "100%" }}> */}
          {item.cumRapChieu.map((rap) => (
            <Box sx={{ mb: 4 }}>
              <Typography component={"h4"}>{rap.tenCumRap}</Typography>
              <Stack spacing={2} direction={"row"}>
                {rap.lichChieuPhim.map((lichChieu) => {
                  // const date = new Date(lichChieu.ngayChieuGioChieu);
                  // const times = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ~ ${date.getHours()}-${date.getMinutes()}`; // dd/mm/yyyy ~ hh-mm
                  const times = dayjs(lichChieu.ngayChieuGioChieu).format(
                    "DD-MM-YYYY ~ HH:mm"
                  );
                  console.log("times", times);
                  return <Button variant="outlined">{times}</Button>;
                })}
              </Stack>
            </Box>
          ))}
          {/* </Stack> */}
        </TabPanel>
      ))}
    </Box>
  );
};

export default ShowTimes;
