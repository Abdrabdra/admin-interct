import { Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { StyledInput } from "../../../../components/styled-components/StyledInput";
import { IProfile } from "../../../../redux/store/rtk-api/profile-rtk/profile.type";
import ProfileForm from "./ProfileForm";
import { PaperRightContainer } from "./style";

interface Props {
  data: IProfile;
}

const RightSideBlock: FC<Props> = ({ data }) => {
  return (
    <Grid item xs={3}>
      <PaperRightContainer>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "24px",
            color: "primary.main",
            mb: "10px",
          }}
        >
          Информация
        </Typography>
        <Divider sx={{ maxWidth: "850px" }} />
        <Grid
          container
          columns={2}
          spacing={3}
          direction={"row"}
          sx={{
            height: "100%",
            marginTop: "0.25px",
            overflow: "hidden",
            overflowY: "scroll",
          }}
        >
          <Grid
            item
            xs
            sx={{
              display: "flex",
              flexDirection: "column",
              // height: "calc(100vh - 200px)",
            }}
          >
            <ProfileForm data={data} />
          </Grid>
        </Grid>
      </PaperRightContainer>
    </Grid>
  );
};

export default RightSideBlock;
