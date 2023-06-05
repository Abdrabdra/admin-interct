import { Stack, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useGetOneProductQuery } from "../../../redux/store/rtk-api/product-rtk/productEndpoints";
import AnnounceBox from "./AnnounceBox";

import AnnounceHeader from "./AnnounceHeader";

const AnnouncementOne = () => {
  const { announceId } = useParams();

  const { data, isLoading, isSuccess } = useGetOneProductQuery(
    announceId ? announceId : ""
  );

  return (
    <Stack spacing={4}>
      {announceId && data && (
        <AnnounceHeader id={Number(announceId)} confirm={data.confirm} />
      )}

      {isLoading ? (
        "Загрузка..."
      ) : isSuccess ? (
        <Stack
          spacing={2}
          sx={{
            padding: "30px",
            borderRadius: "10px",
            backgroundColor: "common.white",
          }}
        >
          <AnnounceBox aData={data} />
        </Stack>
      ) : (
        "Ошибка при загрузки"
      )}
    </Stack>
  );
};

export default AnnouncementOne;
