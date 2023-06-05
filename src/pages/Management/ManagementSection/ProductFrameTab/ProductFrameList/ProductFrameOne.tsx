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
import {
  IProductInfoColor,
  IProductInfoDecor,
} from "../../../../../types/Management/IProductInfo";

interface Props {
  data: IProductInfoDecor;
}

const ProductFrameOne: FC<Props> = ({ data }) => {
  return (
    <Stack
      sx={{
        backgroundColor: "common.white",
        borderRadius: "10px",
        padding: "16px",
      }}
    >
      <Typography>Название: {data.title}</Typography>
    </Stack>
  );
};

export default ProductFrameOne;
