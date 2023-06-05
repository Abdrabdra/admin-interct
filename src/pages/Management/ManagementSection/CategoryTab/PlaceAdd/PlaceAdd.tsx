import React from "react";
import { useFormik } from "formik";
import { Button, CircularProgress, Stack } from "@mui/material";
import { useCreatePlaceMutation } from "../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";
import { StyledMainInput } from "../../../../../components/Input/StyledMainInput";
import MainBaseButton from "../../../../../components/Button/MainBaseButton/MainBaseButton";
import SelectPlaceType from "./SelectPlaceType";

const PlaceAdd = () => {
  const [create, { isLoading }] = useCreatePlaceMutation();

  const formik = useFormik({
    initialValues: {
      row: 0,
      column: 0,
      typeId: 0,
      floor: 0,
    },
    onSubmit: async (values) => {
      create(values);
    },
  });

  const { values, handleChange, handleSubmit, setFieldValue } = formik;

  const handleSetField = (id: number) => {
    setFieldValue("typeId", id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={1}>
        <Stack direction="row" spacing={1}>
          <StyledMainInput
            label="Ряд"
            value={values.row}
            onChange={handleChange}
            name={"row"}
            bordercolor={"primary"}
          />
          <StyledMainInput
            label="Столбец"
            value={values.column}
            onChange={handleChange}
            name={"column"}
            bordercolor={"primary"}
          />
        </Stack>
        <Stack direction="row" spacing={1}>
          <SelectPlaceType handleSetField={handleSetField} />
          <StyledMainInput
            label="Этаж"
            value={values.floor}
            onChange={handleChange}
            name={"floor"}
            bordercolor={"primary"}
          />
        </Stack>

        <Stack>
          <Button
            variant="contained"
            color="primary"
            disabled={isLoading}
            startIcon={isLoading && <CircularProgress sx={{ color: "#FFF" }} />}
            type="submit"
            size={"small"}
            sx={{ width: "fit-content" }}
          >
            Создать
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default PlaceAdd;
