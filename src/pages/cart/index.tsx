import DefaultLayout from "@/components/layout";
import OrderInfo from "@/components/orderInfo";
import Checkout from "@/components/checkout";

const Cart: React.FC = () => {
	return (
		<DefaultLayout>
			<div className="grid grid-cols-[5fr_3fr] h-[93.5vh] overflow-hidden">
				<OrderInfo />
				<div className="bg-gray-100 text-black overflow-y-hidden h-[94vh]">
					<Checkout />
				</div>
			</div>
		</DefaultLayout>
	);
};

export default Cart;
