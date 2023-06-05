import { Box, Stack, Typography } from "@mui/material";
import CategoryCreate from "./CategoryCreate";
import CategoryList from "./CategoryList";
import PlaceAdd from "./PlaceAdd";
import PlaceList from "./PlaceList";

const CategoryTab = () => {
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
          Place
        </Typography>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Stack spacing={2}>
          <CategoryCreate />
          <CategoryList />
        </Stack>

        <Stack>
          <PlaceAdd />
          <PlaceList />
        </Stack>
      </Stack>
    </Box>
  );
};

export default CategoryTab;
