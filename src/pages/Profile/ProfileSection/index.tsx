// library
import { Grid, Paper } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { logout } from "../../../redux/store/reducers/auth/auth.action";
import { useGetMyProfileQuery } from "../../../redux/store/rtk-api/profile-rtk/profileEndpoints";

import LeftSideBlock from "./LeftSideBlock";
import RightSideBlock from "./RightSideBlock";

const ProfileSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, isError, error, refetch } = useGetMyProfileQuery("");

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (error && "status" in error && error.status === 401) {
      dispatch(logout());
    }
  }, [error]);

  console.log("data: ", data && data);

  return (
    <Grid container spacing={2} columns={4}>
      {data && (
        <>
          <LeftSideBlock
            data={{ secondName: data?.secondName, firstName: data?.firstName }}
          />
          <RightSideBlock data={data} />
        </>
      )}
    </Grid>
  );
};
export default ProfileSection;
