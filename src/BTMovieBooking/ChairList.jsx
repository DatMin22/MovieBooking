//rafc
import React from 'react'
import { Chair } from './Chair'

export const ChairList = ({ data }) => {
    return (
        <div className='bg-chair'>
            {data.map((hangGhe) => {
                return (
                    <div key={hangGhe.hang} className="d-flex justify-content-center mt-3 gap-3 ">
                        <div
                            style={{
                                width: 40,
                                height: 40,
                                display: "flex",
                                alignItems: "center",
                                color:'#fff'
                            }}>{hangGhe.hang}
                        </div>

                        <div className="d-flex gap-3">
                            {
                                hangGhe.danhSachGhe.map((ghe) => {


                                    return <Chair ghe={ghe} key={ghe.soGhe} />
                                })
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
