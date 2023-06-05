import { Box, Stack, Typography } from "@mui/material";
import ProductDecorCreate from "./ProductDecorCreate";
import ProductDecorList from "./ProductDecorList";

const ProductDecorTab = () => {
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
          Декор Продукта
        </Typography>
      </Stack>

      <Stack spacing={2}>
        <ProductDecorCreate />
        <ProductDecorList />
      </Stack>
    </Box>
  );
};

export default ProductDecorTab;
