import { Stack, Typography } from "@mui/material";
import { Formik } from "formik";

import MainBaseButton from "../../../../../components/Button/MainBaseButton/MainBaseButton";
import { StyledMainInput } from "../../../../../components/Input/StyledMainInput";
import {
  useCreateCategoryMutation,
  useCreatePlaceTypeMutation,
} from "../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";

interface FormikType {
  title: string;
  cost: number;
}

const initialValues: FormikType = { title: "", cost: 0 };

const CategoryCreate = () => {
  const [create] = useCreatePlaceTypeMutation();

  return (
    <Stack>
      <Typography>Добавить Place Type</Typography>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          create({ title: values.title, cost: Number(values.cost) });
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <StyledMainInput
                label="Название (пример: Альфард)"
                value={values.title}
                onChange={handleChange}
                name={"title"}
                bordercolor={"primary"}
              />
              <StyledMainInput
                label="Стоимость"
                value={values.cost}
                onChange={handleChange}
                name={"cost"}
                bordercolor={"primary"}
              />
              <MainBaseButton
                bgcolor="primary.main"
                sx={{ width: "120px" }}
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

export default CategoryCreate;
