import { ICreateRegion, IGetRegion } from "../../../../types/Management/Region";
import cityApi from "./cityApi";

export const cityEndpoints = cityApi.injectEndpoints({
  endpoints: (builder) => ({
    getCity: builder.query<IGetRegion[], any>({
      query: () => ({
        url: `city`,
      }),
      providesTags: ["City"],
    }),
    createCity: builder.mutation<any, ICreateRegion>({
      query: (data) => ({
        url: `city`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["City"],
    }),

    getDistrict: builder.query<IGetRegion[], string>({
      query: (arg) => ({
        url: `district/${arg}`,
      }),
      providesTags: ["City"],
    }),
    createDistrict: builder.mutation<any, { title: string; cityId: number }>({
      query: (data) => ({
        url: `district`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["City"],
    }),

    createCityIn: builder.mutation<any, ICreateRegion>({
      query: (data) => ({
        url: `region/city`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["City"],
    }),

    deleteCity: builder.mutation<any, { id: number }>({
      query: (arg) => ({
        url: `city/${arg.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["City"],
    }),
    deleteCityUnder: builder.mutation<any, { id: number }>({
      query: (arg) => ({
        url: `region/city/${arg.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["City"],
    }),
  }),
});

export const {
  useGetCityQuery,
  useGetDistrictQuery,

  useCreateCityMutation,
  useCreateDistrictMutation,
  useCreateCityInMutation,

  useDeleteCityMutation,
  useDeleteCityUnderMutation,
} = cityEndpoints;
