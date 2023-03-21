import DefaultLayout from "@/components/layout";
import ItemList from "@/components/itemList";

const Cart: React.FC = () => {
	return (
		<DefaultLayout>
			<div className="grid grid-cols-[5fr_3fr] h-[93.5vh] overflow-hidden">
				<ItemList />
				<div className="bg-gray-100 text-black overflow-y-hidden h-[94vh]">
					<span>parte extra</span>
				</div>
			</div>
		</DefaultLayout>
	);
};

export default Cart;
