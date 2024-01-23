
import {configureStore} from '@reduxjs/toolkit';
import {uiSlice} from '@app/store/reducers/ui';


const store = configureStore({
  reducer: {
    ui: uiSlice.reducer
  },
});

export default store;
