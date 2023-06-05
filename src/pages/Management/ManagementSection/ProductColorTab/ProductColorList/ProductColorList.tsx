import { Stack, Typography } from "@mui/material";
import MainBaseButton from "../../../../../components/Button/MainBaseButton/MainBaseButton";
import {
  useGetCategoryQuery,
  useGetProductInfoColorQuery,
} from "../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";
import ProductColorOne from "./ProductColorOne";

const ProductColorList = () => {
  const { data, isSuccess, isLoading, isFetching, refetch } =
    useGetProductInfoColorQuery("");

  return (
    <Stack>
      {isLoading ? (
        "Загрузка..."
      ) : isSuccess ? (
        <Stack spacing={1}>
          <Stack justifyContent={"space-between"} direction="row">
            <Typography>Список</Typography>
          </Stack>

          {data.map((row) => (
            <ProductColorOne key={row.id} data={row} />
          ))}
        </Stack>
      ) : (
        "Ошибка при загрузки"
      )}
    </Stack>
  );
};

export default ProductColorList;
