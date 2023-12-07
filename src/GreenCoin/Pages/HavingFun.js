import React from 'react'
import havingFun from '../Assets/pexels-photo-9961870.jpeg'

function HavingFun() {
  return (
    <div className='row m-1 mt-5'>
        <div className="col-md-6 bg-dark text-light border border-dark rounded mt-3" style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",

        }}>
           <p className='display-3 p-3'>while they <span className='text-warning fw-bold'>spend</span> a good <span className='text-warning'>time</span> with our <span className='text-warning fw-bold'>free</span> foods <span className='text-warning'>Come</span> and Join <span className='text-warning fw-bold'>Us</span></p>
        </div>
        <div className="col-md-6 mt-3">
          <img src={havingFun} alt="having fun pic" className='img-fluid rounded shadow-lg' />
        </div>
    </div>
  )
}

export default HavingFun;