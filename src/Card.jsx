import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
 

function Card({props, press}) {
  return (
    <>
    <div class="col mb-5">
        <div class="card h-100">
        <div class={`${props.TopSale === false ? 'd-none': ''} badge bg-primary text-white position-absolute saleBadge`}>Top-Sale</div>
            <img class="card-img-top h-50" src={`${props.cardImg}`} alt="Product-Img"/>
            <div class="card-body">
                <div class="text-center">
                    <h4 class="fw-bolder">{props.productName}</h4>
                    <div class="ratings mb-2">
                        {(() => {
                            const stars = [];
                            for (let starIndex = 0; starIndex < 5; starIndex++) {
                            stars.push(
                                <i key={starIndex} className={`${starIndex < props.starRating ? 'fa-solid fa-star text-warning' : 'fa-regular fa-star'}`}></i>
                            );
                            }
                            return stars;
                        })()}
                    </div>
                    <h4><FontAwesomeIcon icon={faIndianRupeeSign} flip />&nbsp;
                    { props.offer === undefined ? props.mrp : (props.mrp - (props.mrp * (props.offer/100))).toFixed(2) }
                    </h4>
                    <p className={`priceDecrease ${props.offer === undefined ? 'd-none' : ''}`}><span>M.R.P: </span><s>{props.mrp}</s> (<b>{props.offer}% off</b>)</p>
                     <p className='fw-bold text-info m-0'>Free Delivery</p>
                </div>
            </div>
            <div class="card-footer pb-4 border-top-0 bg-transparent">
                <div class="text-center"><a 
                class={`btn text-white mt-auto py-2 px-3 ${props.btnTxt === "Add to Cart" ? "btn-success" : "btn-danger" }`}
                href="#" type='button' onClick={()=> press(props)}>{props.btnTxt}</a></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card;