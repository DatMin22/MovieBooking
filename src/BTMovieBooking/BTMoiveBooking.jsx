import { Chair } from './Chair'
import { ChairList } from './ChairList'
import { Result } from './Result'
import data from './data.json'

export const BTMoiveBooking = () => {
    return (
        <div className="container mt-3 ">
            <div className="row">
                <div className="col-10">
                    <ChairList data={data} />
                </div>
                <div className="col-2">
                    <Result />
                </div>
            </div>

        </div>
    )
}
