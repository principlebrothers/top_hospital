import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const topHospitalsApi = createApi({
  reducerPath: 'topHospitals',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.tophospitalsinghana.com/api/v1/',
  }),
  endpoints: (builder) => ({
    getTopHospitals: builder.query({
      query: () => 'hospitals',
    }),
    getHospitalInfo: builder.query({
      query: (id) => `hospital_info/${id}`,
    }),
    getHospitalGallery: builder.query({
      query: (id) => `galleries/${id}`,
    }),
    getAllSpecialties: builder.query({
      query: () => `specialties`,
    }),
    getHospitalServices: builder.query({
      query: (id) => `services/${id}`,
    }),
    createAppointment: builder.mutation({
      query: (body) => ({
        url: 'appointments',
        method: 'POST',
        body
      })
    })
  }),
});

export const {
  useGetTopHospitalsQuery,
  useGetHospitalInfoQuery,
  useGetHospitalGalleryQuery,
  useGetAllSpecialtiesQuery,
  useGetHospitalServicesQuery,
  useCreateAppointmentMutation,
} = topHospitalsApi;
