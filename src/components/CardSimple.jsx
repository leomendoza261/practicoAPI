import React from 'react';


const CardSimple = ({ titulo, data, data2 , factor}) => {
    return (
        <div className="card bg-transparent border border-0 text-white" >
            <h5>{titulo}</h5>
            <div className='row'>
                <div className='col-6 align-items-center'>
                    <div className="card-body">
                        <p className="card-text fs-4 fw-medium">{data} {data2}</p>
                    </div>
                </div>
                <div className='col-6 d-flex align-items-center'>
                    <div className="progress w-75" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar bg-warning " style={{ width: factor + "%" }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSimple;
