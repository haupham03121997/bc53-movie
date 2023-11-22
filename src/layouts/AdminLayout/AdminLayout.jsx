import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/UserContext/UserContent";
import { PATH } from "../../routes/path";

const AdminLayout = () => {
  const { currentUser } = useAuth();
  if (currentUser && currentUser.maLoaiNguoiDung === "QuanTri") {
    return (
      <div>
        AdminLayout
        <Outlet />
      </div>
    );
  }

  return <Navigate to={PATH.HOME} />;
};

export default AdminLayout;
