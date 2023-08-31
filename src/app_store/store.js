import { configureStore } from '@reduxjs/toolkit';
import { topHospitalsApi } from '../components/api/apiSlice';

const store = configureStore({
  reducer: {
    [topHospitalsApi.reducerPath]: topHospitalsApi.reducer,
  },
  middleware: (getDefaultMiddlewear) =>
    getDefaultMiddlewear().concat(topHospitalsApi.middleware),
});

export default store;
