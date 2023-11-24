import { Button, Typography } from "@mui/material";
import React, { memo } from "react";

function Child({ count, user, newCount, onResetCount }) {
  console.log("child re-render");
  return (
    <div>
      Hiển thị 1 cái chart hoặc 1 list data rất lớn (1tr item)
      <Typography sx={{ fontSize: 18 }}>
        Giá trị count từ Child: {count}, {newCount}
      </Typography>
      <Typography sx={{ fontSize: 18 }}>
        Giá trị user từ Child: {user.fullName}
      </Typography>
      <Button onClick={onResetCount}>Reset Count</Button>
    </div>
  );
}

export default memo(Child);
