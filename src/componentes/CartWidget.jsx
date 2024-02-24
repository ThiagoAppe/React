import Cart from '../assets/Cart.svg'

const CartWidget = () => {
    return (<><button className='btn p-0 d-flex me-5'>
                <img className='' src={Cart} alt="Carrito"/>
                <span className='text-light'>(700)</span>
            </button></>)
}

export default CartWidget;