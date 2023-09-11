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
    getServices: builder.query({
      query: () => `services`,
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
    }),
    createEnquiry: builder.mutation({
      query: (body) => ({
        url: 'enquiries',
        method: 'POST',
        body
      })
    }),
    requestTreatmentCost: builder.mutation({
      query: (body) => ({
        url: 'treatment_costs',
        method: 'POST',
        body
      })
    }),
    requestSecondOpinion: builder.mutation({
      query: (body) => ({
        url: 'second_opinions',
        method: 'POST',
        body
      })
    }),
    requestVisaAssistance: builder.mutation({
      query: (body) => ({
        url: 'visa_assistances',
        method: 'POST',
        body
      })
    }),
  }),
});

export const {
  useGetTopHospitalsQuery,
  useGetHospitalInfoQuery,
  useGetHospitalGalleryQuery,
  useGetAllSpecialtiesQuery,
  useGetHospitalServicesQuery,
  useCreateAppointmentMutation,
  useGetServicesQuery,
  useCreateEnquiryMutation,
  useRequestTreatmentCostMutation,
  useRequestSecondOpinionMutation,
  useRequestVisaAssistanceMutation
} = topHospitalsApi;
