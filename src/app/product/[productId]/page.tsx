import React from 'react'

const ProductId = ({params}:{params:{productId:String}}) => (
    <div>
        <h1>my products{params.productId}</h1>
    </div>
)

export default ProductId
