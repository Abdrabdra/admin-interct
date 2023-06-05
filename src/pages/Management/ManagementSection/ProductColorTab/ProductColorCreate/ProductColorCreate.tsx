import { Stack, Typography } from "@mui/material";
import { Formik } from "formik";

import MainBaseButton from "../../../../../components/Button/MainBaseButton/MainBaseButton";
import { StyledMainInput } from "../../../../../components/Input/StyledMainInput";
import {
  useCreateCategoryMutation,
  useCreateProdctInfoColorMutation,
} from "../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";

const ProductColorCreate = () => {
  const [create] = useCreateProdctInfoColorMutation();

  return (
    <Stack>
      <Typography>Добавить</Typography>

      <Formik
        initialValues={{ title: "", value: "" }}
        onSubmit={(values) => {
          create({ title: values.title, value: values.value });
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Stack direction={"row"} spacing={2}>
              <StyledMainInput
                label="Название"
                value={values.title}
                onChange={handleChange}
                name={"title"}
                bordercolor={"primary"}
              />
              <StyledMainInput
                label="Значение (Hex-код)"
                value={values.value}
                onChange={handleChange}
                name={"value"}
                bordercolor={"primary"}
              />
              <MainBaseButton
                bgcolor="primary.main"
                sx={{ width: "120px", minWidth: "100px" }}
                type="submit"
              >
                Добавить
              </MainBaseButton>
            </Stack>
          </form>
        )}
      </Formik>
    </Stack>
  );
};

export default ProductColorCreate;
