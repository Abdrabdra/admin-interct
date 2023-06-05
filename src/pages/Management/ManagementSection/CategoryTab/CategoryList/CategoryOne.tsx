import { Button, Stack, Typography } from "@mui/material";
import { Formik } from "formik";
import { FC, useState } from "react";
import BaseAccordion from "../../../../../components/BaseAccordion/StepperAccordion";
import MainBaseButton from "../../../../../components/Button/MainBaseButton/MainBaseButton";
import { StyledMainInput } from "../../../../../components/Input/StyledMainInput";
import { MainButton } from "../../../../../components/styled-components/StyledButton";
import {
  useCreateCategoryMutation,
  useGetCategoryQuery,
} from "../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";
import { IPlaceType } from "../../../../../types/Management/IPlaceType";

interface Props {
  data: IPlaceType;
}

const CategoryOne: FC<Props> = ({ data }) => {
  return (
    <Stack>
      <Typography>Название {data.title}</Typography>
      <Typography>Цена {data.cost}</Typography>
    </Stack>
  );
};

export default CategoryOne;
