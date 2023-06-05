import { Stack, Typography } from "@mui/material";
import MainBaseButton from "../../../../../components/Button/MainBaseButton/MainBaseButton";
import {
  useGetCategoryQuery,
  useGetPlaceTypeQuery,
} from "../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";
import CategoryOne from "./CategoryOne";

const CategoryList = () => {
  const { data, isSuccess, isLoading, isFetching, refetch } =
    useGetPlaceTypeQuery("");

  return (
    <Stack>
      {isLoading ? (
        "Загрузка..."
      ) : isSuccess ? (
        <Stack spacing={1}>
          <Stack justifyContent={"space-between"} direction="row">
            <Typography variant="h6">Список PlaceType</Typography>
          </Stack>

          <Stack spacing={2}>
            {data.map((row) => (
              <CategoryOne key={row.id} data={row} />
            ))}
          </Stack>
        </Stack>
      ) : (
        "Ошибка при загрузки"
      )}
    </Stack>
  );
};

export default CategoryList;
