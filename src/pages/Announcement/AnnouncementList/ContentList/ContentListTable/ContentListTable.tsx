import {
  Box,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { $image_api } from "../../../../../api";
import MainBaseButton from "../../../../../components/Button/MainBaseButton/MainBaseButton";
import ChipStatus from "../../../../../components/Chip/ChipStatus";
import {
  StyledBodyCell,
  StyledBodyCellFirst,
  StyledBodyCellLast,
  StyledBodyRow,
  StyledHeadCell,
  StyledHeadRow,
  TableDivider,
} from "../../../../../components/Table/TableRounded/TableRounded.module";
import { IAnnouncement } from "../../../../../types/Announcement/Announcement.type";
import { SessionStatus } from "../../../../../types/Enums";
import { ISessionData } from "../../../../../types/ISession";
import numberWithSpaces from "../../../../../utils/numberWithSpaces";

const tableHead = ["Название", "Артикул", "Категория"];

interface Props {
  tableData: ISessionData[];
}

const ContentListTable: FC<Props> = ({ tableData }) => {
  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    navigate(`/app/announcement/one/${id}`);
  };

  return (
    <TableContainer component={Box}>
      <Table
        sx={{ minWidth: 650, boxShadow: "none" }}
        aria-label="simple table"
      >
        <TableHead sx={{ position: "relative" }}>
          <StyledHeadRow key={new Date().getTime()}>
            {tableHead.map((row) => (
              <StyledHeadCell>{row}</StyledHeadCell>
            ))}
          </StyledHeadRow>
          <TableDivider />
        </TableHead>

        <TableBody>
          {tableData.map((row) => (
            <StyledBodyRow key={row.id}>
              <StyledBodyCellFirst>
                <Stack direction="row" spacing={1}>
                  <Box
                    sx={{
                      backgroundColor: "primary.main",
                      borderRadius: "10px",
                      minWidth: "60px",
                      width: "60px",
                      height: "60px",
                    }}
                  >
                    {row?.bus.image && (
                      <img
                        src={`${$image_api}/${row.bus.image}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "10px",
                        }}
                      />
                    )}
                  </Box>
                  <Stack justifyContent={"center"}>
                    <Typography>
                      {row.cityFrom.title + " - " + row.cityTo.title}
                    </Typography>
                    <Typography variant="h6" sx={{ color: "primary.main" }}>
                      {`${numberWithSpaces(row.bus.type.cost)} KZT`}
                    </Typography>
                  </Stack>
                </Stack>
              </StyledBodyCellFirst>

              <StyledBodyCell>{row.id}</StyledBodyCell>

              <StyledBodyCell>
                <ChipStatus status={row.status} />
              </StyledBodyCell>

              <StyledBodyCellLast>
                <MainBaseButton
                  onClick={() => handleNavigate(row.id)}
                  bgcolor="primary.main"
                  sx={{ height: "40px", maxWidth: "180px" }}
                >
                  Подробнее
                </MainBaseButton>
              </StyledBodyCellLast>
            </StyledBodyRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContentListTable;
