import { Box, Divider, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { IOneAnnouncement } from "../../../../../types/Announcement/OneAnnouncement.type";

interface Props {
  data: IOneAnnouncement;
}

const ProductInfo: FC<Props> = ({ data }) => {
  const stateData = [
    // { id: 0, title: "Название товара", value: data.title },
    { id: 1, title: "Производитель", value: data.info?.production },
    { id: 2, title: "Описание товара", value: data?.description },
    { id: 3, title: "Артикул", value: data?.id },
    { id: 4, title: "Цена KZT", value: data?.price },
    // { id: 5, title: "Категория", value: data. },
    // { id: 6, title: "Подкатегория", value: "Подкатегория" },
    {
      id: 7,
      title: "Цвет",
      value: data.colors?.map((row) => row?.title).join(", "),
    },
    {
      id: 8,
      title: "Текстура",
      value: data?.info?.frames.map((row) => row?.title).join(", "),
    },
    { id: 9, title: "Длина (mm)", value: data?.info?.length },
    { id: 10, title: "Ширина (mm)", value: data?.info?.width },
    { id: 11, title: "Высота (mm)", value: data?.info?.height },
  ];

  return (
    <Stack spacing={2}>
      <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
        О товаре
      </Typography>

      <Stack
        sx={{
          backgroundColor: "secondary.light",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
          Диван “Lanister”
        </Typography>
        {stateData.map((row) => (
          <Stack key={row.id} spacing={1} sx={{ paddingTop: "0.5rem" }}>
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{
                  flex: "1",
                  color: "secondary.900",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {row?.title}
              </Typography>
              <Typography
                sx={{
                  flex: "1",
                  display: "display",
                  alignItems: "center",
                  fontWeight: 500,
                }}
              >
                {row?.value}
              </Typography>
            </Box>
            {stateData.length !== row.id + 1 && <Divider />}
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default ProductInfo;
