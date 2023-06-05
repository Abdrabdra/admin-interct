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
import { IProductInfoColor } from "../../../../../types/Management/IProductInfo";

interface Props {
  data: IProductInfoColor;
}

const ProductColorOne: FC<Props> = ({ data }) => {
  return (
    <Stack
      sx={{
        backgroundColor: "common.white",
        borderRadius: "10px",
        padding: "16px",
      }}
    >
      <Typography>Цвет: {data.title}</Typography>
      <Typography>Хекс-код: {data.value}</Typography>
    </Stack>
  );
};

export default ProductColorOne;
