import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React, { FC } from "react";

import MainBaseButton from "../../../../../components/Button/MainBaseButton/MainBaseButton";
import { StyledMainInput } from "../../../../../components/Input/StyledMainInput";
import {
  useCreateCityInMutation,
  useCreateCityMutation,
  useCreateDistrictMutation,
  useGetCityQuery,
} from "../../../../../redux/store/rtk-api/city-rtk/cityEndpoints";

interface Props {
  id?: number;
}

const DistrictAdd: FC<Props> = ({ id }) => {
  const { data } = useGetCityQuery("");
  const [create] = useCreateDistrictMutation();

  const [districtId, setDistrictId] = React.useState("");

  const handleDistrictChange = (event: SelectChangeEvent) => {
    setDistrictId(event.target.value as string);
  };

  return (
    <Stack>
      <Typography>Добавить {id ? "город" : "регион"}</Typography>

      <Formik
        initialValues={{ title: "", cityId: undefined }}
        onSubmit={(values) => {
          console.log("da");
          values.cityId &&
            create({ title: values.title, cityId: values.cityId });
        }}
      >
        {({ values, handleChange, handleSubmit, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            <Stack direction={"row"} spacing={2}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Город</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Город"
                    value={districtId}
                    onChange={(e) => {
                      setFieldValue("cityId", e.target.value);
                      setDistrictId(e.target.value);
                    }}
                  >
                    {data?.map((row) => (
                      <MenuItem value={row.id}>{row.title}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <StyledMainInput
                value={values.title}
                onChange={handleChange}
                placeholder={"Название района"}
                label="Название района"
                name={"title"}
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

export default DistrictAdd;
