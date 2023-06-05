import { Box, Stack, Typography } from "@mui/material";
import ProductColorCreate from "./ProductColorCreate";
import ProductColorList from "./ProductColorList";

const ProductColorTab = () => {
  return (
    <Box>
      <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
        <Typography
          sx={{
            fontSize: "25px",
            mb: "15px",
            color: "primary.main",
            fontWeight: 600,
          }}
        >
          Цвет Продукта
        </Typography>
      </Stack>

      <Stack spacing={2}>
        <ProductColorCreate />
        <ProductColorList />
      </Stack>
    </Box>
  );
};

export default ProductColorTab;
