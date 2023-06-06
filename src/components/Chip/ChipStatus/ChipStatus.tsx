import { Chip } from "@mui/material";
import { FC } from "react";
import { SessionStatus, Status } from "../../../types/Enums";

interface Props {
  status: SessionStatus;
}

const ChipStatus: FC<Props> = ({ status }) => {
  return (
    <Chip
      label={
        status === SessionStatus.COLLECTS
          ? "В ожиданий"
          : status === SessionStatus.InTransit
          ? "В пути"
          : status === SessionStatus.FINISH
          ? "Выполнено"
          : "Ошибка"
      }
      sx={{
        maxWidth: "175px",
        color: "#FFF",
        borderRadius: "5px",
        height: "40px",
        fontSize: "16px",
        fontWeight: "600",
        backgroundColor:
          status === SessionStatus.COLLECTS
            ? "#222222"
            : status === SessionStatus.InTransit
            ? "secondary.main"
            : status === SessionStatus.FINISH
            ? "#2DC36A"
            : "secondary.light",
      }}
    />
  );
};

export default ChipStatus;
