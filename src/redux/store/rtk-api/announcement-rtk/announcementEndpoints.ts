import announcementApi from "./announcementApi";

import { Status } from "../../../../types/Enums";
import { IAnnouncementsResponse } from "../../../../types/Announcement/Announcement.type";

export const announcementEndpoints = announcementApi.injectEndpoints({
  endpoints: (builder) => ({
    getAnnouncements: builder.query<IAnnouncementsResponse, object>({
      query: (arg) => {
        return {
          url: `/product`,
          params: { ...arg },
        };
      },
      providesTags: ["announcements"],
    }),
    createAnnouncement: builder.mutation<any, FormData>({
      query: (body) => ({
        url: `/announcement`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["announcements"],
    }),

    updateStatusAnnouncement: builder.mutation<
      any,
      { id: number; body: { status: Status } }
    >({
      query: (arg) => ({
        url: `/announcement/update-status/${arg.id}`,
        method: "PUT",
        body: arg.body,
      }),
      invalidatesTags: ["announcements"],
    }),
  }),
});

export const {
  useGetAnnouncementsQuery,
  useCreateAnnouncementMutation,

  useUpdateStatusAnnouncementMutation,
} = announcementEndpoints;
