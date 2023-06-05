import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLazyGetPlaceByTypeIdQuery } from "../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";
import SelectPlaceType from "../PlaceAdd/SelectPlaceType";

const PlaceList = () => {
  const [trigger, result] = useLazyGetPlaceByTypeIdQuery();

  const [value, setValue] = useState<undefined | number>(undefined);

  const handleSetField = (id: number) => {
    setValue(id);
  };

  useEffect(() => {
    if (value) {
      trigger(value);
    }
  }, [value]);

  return (
    <Stack>
      <Typography variant="h6">Список Place</Typography>
      <SelectPlaceType handleSetField={handleSetField} />

      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <List disablePadding>
          {result.data?.map((row) => (
            <>
              <ListItem key={row.id} disableGutters disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={
                      <Stack key={row.id} sx={{}}>
                        <Typography>Этаж: {row.floor}</Typography>
                        <Typography>Ряд: {row.row}</Typography>
                        <Typography>Столбец: {row.column}</Typography>
                      </Stack>
                    }
                  />
                </ListItemButton>
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </Box>
    </Stack>
  );
};

export default PlaceList;
