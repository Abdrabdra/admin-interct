import { Stack, Typography } from "@mui/material";
import React from "react";
import { useGetDistrictQuery } from "../../../../../redux/store/rtk-api/city-rtk/cityEndpoints";
import { IGetRegion } from "../../../../../types/Management/Region";

interface Props {
  data?: IGetRegion[];
}

const DistrictList: React.FC<Props> = ({ data }) => {
  return (
    <Stack spacing={2}>
      {data?.map((row) => (
        <DistrictListRow row={row} cityName={row.title} />
      ))}
    </Stack>
  );
};

export default DistrictList;

interface RowProps {
  row: IGetRegion;
  cityName: string;
}

const DistrictListRow: React.FC<RowProps> = ({ row, cityName }) => {
  const { data } = useGetDistrictQuery(String(row.id));

  return (
    <Stack spacing={1}>
      {data && data.length > 0 && <Typography>Город: {cityName}</Typography>}

      {data?.map((row) => (
        <Stack sx={{ pl: 3 }}>
          <Typography>Арктикул: {row.id}</Typography>
          <Typography>Арктикул: {row.title}</Typography>
        </Stack>
      ))}
    </Stack>
  );
};
