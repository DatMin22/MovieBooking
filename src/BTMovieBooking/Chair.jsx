
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { btMovieBookingActions } from '../store/BTMovieBooking/slice'
import classNames from 'classnames'
export const Chair = ({ ghe }) => {
    const { chairsBooking, chairsBooked } = useSelector((state) => state.btMovieBooking)
    const dispatch = useDispatch()

    return <div className={classNames('Chair', {
        booking: chairsBooking.find((e) => e.soGhe === ghe.soGhe),
        booked: chairsBooked.find((e) => e.soGhe === ghe.soGhe),
    })}
        onClick={() => {
            if (Number(ghe.soGhe)) {
                disable = true
            } else {
                dispatch(btMovieBookingActions.setChairsBooking(ghe))
            }
        }}
    >{ghe.soGhe}</div>
}
