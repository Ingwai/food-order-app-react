import React, {useState } from 'react';
import Header from './component/Layout/Header';
import Meals from './component/Meals/Meals';
import Cart from './component/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
	const [cartIsShow, setCartIsShown] = useState(false);

	const showCartHandler = () => {
		setCartIsShown(true);
	};

	const hideCartHandler = () => {
		setCartIsShown(false);
	};

	return (
		<CartProvider>
			{cartIsShow && <Cart onClose={hideCartHandler}/>}
			<Header onShowCart = {showCartHandler}/>
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;
