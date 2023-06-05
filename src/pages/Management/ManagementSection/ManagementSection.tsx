import React, { useEffect } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import PaletteIcon from "@mui/icons-material/Palette";
import ChairIcon from "@mui/icons-material/Chair";
import CropIcon from "@mui/icons-material/Crop";

import CityTab from "./CityTab";
import CategoryTab from "./CategoryTab";
import ProductColorTab from "./ProductColorTab";
import ProductDecorTab from "./ProductDecorTab";
import ProductFrameTab from "./ProductFrameTab";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const ManagementSection = () => {
  const location = useLocation();

  const [value, setValue] = React.useState(0);

  useEffect(() => {
    if (location.pathname === "/app/management/city") {
      setValue(0);
    }

    if (location.pathname === "/app/management/marka") {
      setValue(1);
    }

    if (location.pathname === "/app/management/product-info-color") {
      setValue(2);
    }
    if (location.pathname === "/app/management/product-info-decor") {
      setValue(3);
    }
    if (location.pathname === "/app/management/product-info-frame") {
      setValue(4);
    }
  }, [location]);

  const navigate = useNavigate();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: "15px",
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs">
          <Tab
            icon={<SortOutlinedIcon />}
            label="Города"
            onClick={() => navigate("/app/management/city")}
          />

          <Tab
            icon={<PeopleOutlinedIcon />}
            label="Place"
            onClick={() => navigate("/app/management/category")}
          />

          <Tab
            icon={<PaletteIcon />}
            label="Цвет Продукта"
            onClick={() => navigate("/app/management/product-info-color")}
          />
          <Tab
            icon={<ChairIcon />}
            label="Декор Продукта"
            onClick={() => navigate("/app/management/product-info-decor")}
          />
          <Tab
            icon={<CropIcon />}
            label="Каркас Продукта"
            onClick={() => navigate("/app/management/product-info-frame")}
          />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <CityTab />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <CategoryTab />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <ProductColorTab />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ProductDecorTab />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ProductFrameTab />
      </TabPanel>
    </Box>
  );
};

export default ManagementSection;
