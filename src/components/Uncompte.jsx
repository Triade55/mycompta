import React from 'react'
export default function Uncompte({name}) {
  return (
    <>
        <div className="col-3 bg-success bg-opacity-10 rounded-5 p-3">
            <div className="row">
                <div className="col-12">
                    {name}
                </div>
                <div className="col-4 h3">
                    10,000.00
                </div>
            </div>
        </div>
    </>
  )
}
