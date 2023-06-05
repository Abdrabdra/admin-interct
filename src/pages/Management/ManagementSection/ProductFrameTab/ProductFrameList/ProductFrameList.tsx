import { Stack, Typography } from "@mui/material";
import MainBaseButton from "../../../../../components/Button/MainBaseButton/MainBaseButton";
import {
  useGetCategoryQuery,
  useGetProductInfoColorQuery,
  useGetProductInfoDecorQuery,
  useGetProductInfoFrameQuery,
} from "../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";
import ProductFrameOne from "./ProductFrameOne";

const ProductFrameList = () => {
  const { data, isSuccess, isLoading, isFetching, refetch } =
    useGetProductInfoFrameQuery("");

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
            <ProductFrameOne key={row.id} data={row} />
          ))}
        </Stack>
      ) : (
        "Ошибка при загрузки"
      )}
    </Stack>
  );
};

export default ProductFrameList;
