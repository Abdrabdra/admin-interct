import { Stack, Typography } from "@mui/material";
import { Formik } from "formik";

import MainBaseButton from "../../../../../components/Button/MainBaseButton/MainBaseButton";
import { StyledMainInput } from "../../../../../components/Input/StyledMainInput";
import {
  useCreateCategoryMutation,
  useCreateProdctInfoColorMutation,
  useCreateProdctInfoDecorMutation,
} from "../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";

const ProductDecorCreate = () => {
  const [create] = useCreateProdctInfoDecorMutation();

  return (
    <Stack>
      <Typography>Добавить</Typography>

      <Formik
        initialValues={{ title: "" }}
        onSubmit={(values) => {
          create({ title: values.title });
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

export default ProductDecorCreate;
