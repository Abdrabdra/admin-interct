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
import React from "react";
import { useGetPlaceTypeQuery } from "../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";

const SelectPlaceType: React.FC<{ handleSetField: (id: number) => void }> = ({
  handleSetField,
}) => {
  const { data } = useGetPlaceTypeQuery("");
  const [value, setValue] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
    handleSetField(Number(event.target.value));
  };

  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">PlaceType</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="PlaceType"
          onChange={handleChange}
        >
          {data?.map((row) => (
            <MenuItem value={row.id}>
              <Stack>
                <Typography>Название: {row.title}</Typography>
                <Typography>Цена: {row.cost}</Typography>
              </Stack>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectPlaceType;
