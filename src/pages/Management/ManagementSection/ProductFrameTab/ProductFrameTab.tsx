import { Box, Stack, Typography } from "@mui/material";
import ProductFrameCreate from "./ProductFrameCreate";
import ProductFrameList from "./ProductFrameList";

const ProductFrameTab = () => {
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
          Каркас Продукта
        </Typography>
      </Stack>

      <Stack spacing={2}>
        <ProductFrameCreate />
        <ProductFrameList />
      </Stack>
    </Box>
  );
};

export default ProductFrameTab;
