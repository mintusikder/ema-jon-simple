const add = (first, second) =>{
    return first + second
}
const multply = (first, second) =>{
    return first * second
}
// export default add

const item= [
    {id:1,name:'alta', price:100 },
    {id:2,name:'alta', price:100 },
    {id:3,name:'alta', price:100 },
    {id:4,name:'alta', price:100 },
    {id:5,name:'alta', price:100 },
]
const reduseItem = (previous, current) => previous + current.price
const total = item.reduce(reduseItem , 0)

const getTotalPrice = product =>{
    const reduce = (previous, current) => previous + current.price 
    const total = product.reduce(reduce, 0)
    return total
}

export{add , multply, getTotalPrice}