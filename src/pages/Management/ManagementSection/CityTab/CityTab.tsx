import { Box, Button, Stack, Typography } from "@mui/material";
import { useGetCityQuery } from "../../../../redux/store/rtk-api/city-rtk/cityEndpoints";
import CreateCity from "./CreateCity";
import DistrictAdd from "./DistrictAdd";
import DistrictList from "./DistrictList";
import ListCity from "./ListCity";

const CityTab = () => {
  const { data, isSuccess, isLoading, isFetching, refetch } =
    useGetCityQuery("");

  return (
    <Stack spacing={1} direction="row">
      <Stack width={"100%"}>
        <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontSize: "25px",
              mb: "15px",
              color: "primary.main",
              fontWeight: 600,
            }}
          >
            Город
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <CreateCity />
          <ListCity />
        </Stack>
      </Stack>

      <Stack width={"100%"}>
        <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontSize: "25px",
              mb: "15px",
              color: "primary.main",
              fontWeight: 600,
            }}
          >
            Район
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <DistrictAdd />
          <DistrictList data={data} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CityTab;
