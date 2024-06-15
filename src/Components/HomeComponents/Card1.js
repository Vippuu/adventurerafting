import React from 'react'
import Popover from '../Popover';
export default function Card1(props) {
  return (
         
                     <div className="card bg-light  shadow-lg p-3 mb-5 bg-body rounded " >
                            <div className="card-body " >
                                <h5 className="card-title fw-bolder">{props.Card1H}</h5>
                                <p className="card-text"><span className='text-success'>From: </span>{props.From}<span className='text-danger'>To: </span>{props.To}</p>
                                <p>{props.CardP}</p>
                                <Popover/>
                            </div>
                              
                     </div>
        
  )
}
