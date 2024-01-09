import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductList } from '../data/ProductList';

export default function Product() {
    const params=useParams();
    const props=ProductList.find((element)=> element.id === parseInt(params.id));
  return (
    <div className='card m-3 height:100'>
    <div className='mt-2'>
        <img src={props.thumbnail} style={{ height: '280px', width: '380px' }} alt={props.title} className='border-radius-9'/> 
    </div>
    <div className="mt-3 card-body">
        <h5 className='card-title'>{props.title}</h5>
        <h6 className='mt-2'>Price: {`$${props.price}`}</h6>
        <h6 className='mt-2'>Discount: {props.discountPercentage}%</h6>
        <h6 className='mt-2'>Rating:{props.rating}</h6>
        <div className='mt-4'>
            {props.stock >0? 
            <>
            <button className='btn btn-success'>Buy Now</button>
            <button className='ms-3 btn btn-success'>Add to Cart</button>
            </>
            :<button className='btn btn-outline-danger'>Out of Stock</button>}
        </div>
    </div>
</div>
  )
}
