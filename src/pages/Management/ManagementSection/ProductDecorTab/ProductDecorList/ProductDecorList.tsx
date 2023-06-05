import { Stack, Typography } from "@mui/material";
import MainBaseButton from "../../../../../components/Button/MainBaseButton/MainBaseButton";
import {
  useGetCategoryQuery,
  useGetProductInfoColorQuery,
  useGetProductInfoDecorQuery,
} from "../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";
import ProductDecorOne from "./ProductDecorOne";

const ProductDecorList = () => {
  const { data, isSuccess, isLoading, isFetching, refetch } =
    useGetProductInfoDecorQuery("");

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
            <ProductDecorOne key={row.id} data={row} />
          ))}
        </Stack>
      ) : (
        "Ошибка при загрузки"
      )}
    </Stack>
  );
};

export default ProductDecorList;
