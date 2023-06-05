import {
  IProductInfoColor,
  IProductInfoDecor,
} from "./../../../../types/Management/IProductInfo";
import managementApi from "./managementApi";
import { IGetMarkaResponse } from "../../../../types/Management/Marka";
import { IPlace, IPlaceType } from "../../../../types/Management/IPlaceType";

export const managementEndpoints = managementApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query<IGetMarkaResponse, any>({
      query: (arg) => ({
        url: `category`,
        params: { parentId: arg.parentId },
        method: "GET",
      }),
      providesTags: ["category"],
    }),
    createCategory: builder.mutation<
      any,
      { categoryId?: number; title: string }
    >({
      query: (body) => ({
        url: "category",
        method: "POST",
        body,
      }),
      invalidatesTags: ["category"],
    }),
    deleteCategory: builder.mutation<any, { id: number }>({
      query: (arg) => ({
        url: `category/${arg.id}`,
        method: "DELETE",
      }),
    }),

    // product-info
    getProductInfoColor: builder.query<IProductInfoColor[], any>({
      query: () => ({
        url: `product-info/color`,
        method: "GET",
      }),
      providesTags: ["product-info-color"],
    }),
    createProdctInfoColor: builder.mutation<
      any,
      { title: string; value: string }
    >({
      query: (body) => ({
        url: "product-info/color",
        method: "POST",
        body,
      }),
      invalidatesTags: ["product-info-color"],
    }),
    getProductInfoDecor: builder.query<IProductInfoDecor[], any>({
      query: () => ({
        url: `product-info/decor`,
        method: "GET",
      }),
      providesTags: ["product-info-decor"],
    }),
    createProdctInfoDecor: builder.mutation<any, { title: string }>({
      query: (body) => ({
        url: "product-info/decor",
        method: "POST",
        body,
      }),
      invalidatesTags: ["product-info-decor"],
    }),
    getProductInfoFrame: builder.query<IProductInfoDecor[], any>({
      query: () => ({
        url: `product-info/frame`,
        method: "GET",
      }),
      providesTags: ["product-info-frame"],
    }),
    createProdctInfoFrame: builder.mutation<any, { title: string }>({
      query: (body) => ({
        url: "product-info/frame",
        method: "POST",
        body,
      }),
      invalidatesTags: ["product-info-frame"],
    }),

    // Place
    createPlace: builder.mutation<
      any,
      { row: number; column: number; typeId: number; floor: number }
    >({
      query: (body) => ({
        url: "place",
        method: "POST",
        body,
      }),
      invalidatesTags: ["place"],
    }),
    createPlaceType: builder.mutation<any, { title: string; cost: number }>({
      query: (body) => ({
        url: "place/type",
        method: "POST",
        body,
      }),
      invalidatesTags: ["place"],
    }),
    getPlaceType: builder.query<IPlaceType[], any>({
      query: () => ({
        url: `place/type`,
        method: "GET",
      }),
      providesTags: ["place"],
    }),
    getPlaceByTypeId: builder.query<IPlace[], any>({
      query: (arg) => ({
        url: `place/${arg}`,
        method: "GET",
      }),
      providesTags: ["place"],
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,

  useGetProductInfoColorQuery,
  useCreateProdctInfoColorMutation,
  useGetProductInfoDecorQuery,
  useCreateProdctInfoDecorMutation,
  useGetProductInfoFrameQuery,
  useCreateProdctInfoFrameMutation,

  // Place
  useCreatePlaceMutation,
  useCreatePlaceTypeMutation,

  useGetPlaceTypeQuery,
  useGetPlaceByTypeIdQuery,
  useLazyGetPlaceByTypeIdQuery,
} = managementEndpoints;
