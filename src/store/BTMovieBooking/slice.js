import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    chairsBooking: [],
    chairsBooked: []
}
// createSlice(): tư động tạo reducer, action, type
export const btMoiveBookingSlice = createSlice({
    name: "BTMovieBooking",
    initialState,
    reducers: {
        setChairsBooking: (state, { payload }) => {
            const index = state.chairsBooking.findIndex((value) => value.soGhe === payload.soGhe)
            if (index !== -1) {
                
                state.chairsBooking.splice(index, 1)
            } else {
                state.chairsBooking.push(payload)
            }
        },
        setChairsBooked: (state, { payload }) => {
            state.chairsBooked = [...state.chairsBooked, ...state.chairsBooking]
            state.chairsBooking = []
        },

        // xóa ghế khỏi danh sách booking
        deleteSeatFromChairsBooking: (state, { payload }) => {
            const index = state.chairsBooking.findIndex((value) => value === payload)
            state.chairsBooking.splice(index, 1)

        }
    }
})
// bóc tách reducer và action từ btMoiveBookingSlice
export const { reducer: btMovieBookingReducer, actions: btMovieBookingActions } = btMoiveBookingSlice
