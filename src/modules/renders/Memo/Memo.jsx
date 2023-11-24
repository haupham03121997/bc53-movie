import { Box, Button, Typography } from "@mui/material";
import React, { useState, useMemo, useCallback } from "react";
import Child from "./Child";

const Memo = () => {
  const [count, setCount] = useState(1);
  const [liked, setLiked] = useState(false);
  console.log("parent re-render");

  // const user = { fullName: "Nguyen Văn A" }; // 0xxx123 // 0xxxx234

  const user = useMemo(() => {
    return { fullName: "Nguyen Văn A" }; // 0xxxx123
  }, []);

  const newCount = useMemo(() => {
    return count;
  }, [count]);

  console.log("newCount", newCount);

  // console.log("user", user);

  const handleResetCount = useCallback(() => {
    setCount(1);
  }, []);

  return (
    <div style={{ marginBottom: "200px" }}>
      <Box sx={{ marginBottom: 4 }}>
        <Button variant="outlined" onClick={() => setCount(count - 1)}>
          Giảm
        </Button>
        <Typography sx={{ fontSize: 20, fontWeight: 700, color: "green" }}>
          {count}
        </Typography>
        <Button variant="contained" onClick={() => setCount(count + 1)}>
          Tăng
        </Button>{" "}
      </Box>
      <Box sx={{ marginBottom: 4 }}>
        <Button variant="contained" onClick={() => setLiked(true)}>
          Like
        </Button>
        <Typography sx={{ fontSize: 20, fontWeight: 700, color: "green" }}>
          {liked ? "Đã like 👍🏻" : "Chưa like"}
        </Typography>
        <Button variant="outlined" onClick={() => setLiked(false)}>
          Unlike
        </Button>
      </Box>
      <Child
        count={count}
        user={user}
        newCount={newCount}
        onResetCount={handleResetCount}
      />
    </div>
  );
};

export default Memo;
