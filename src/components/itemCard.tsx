import ItemInterface from "@/types/itemInterface";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { addItem, subItem } from "@/store/slices/onCartItems";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { RootState } from "@/store/store";
import { BsTrash } from "react-icons/bs";

const ItemCard: React.FC<ItemInterface> = ({
	id,
	name,
	img,
	desc,
	category,
	version,
	allYouCanEat,
}) => {
	const itemsOnCart = useSelector((state: RootState) => state.cart);
	const { t } = useTranslation();
	const dispatch = useDispatch();

	const [selectedItem, setSelectedItem] = useState({
		flavor: version[0].name,
		size: version[0].amount,
		price: version[0].price,
	});

	const handleSelectedItem = (id: number) => {
		id = id - 1;
		if (version[id]) {
			const newSelectedItem = {
				flavor: version[id].name,
				size: version[id].amount,
				price: version[id].price,
			};
			setSelectedItem(newSelectedItem);
		}
	};

	const isItemOnCart = (itemVersion: string, itemSize: number) => {
		const exists = itemsOnCart.find(
			(item) =>
				item.name === name &&
				item.flavor === itemVersion &&
				item.size === itemSize
		);
		return exists;
	};

	const itemQtyOnCart = (itemVersion: string, itemSize: number) => {
		const exists = isItemOnCart(itemVersion, itemSize);

		return exists?.amount;
	};

	const handleItemAdd = (flavor: string, size: number, price: number) => {
		dispatch(
			addItem({
				name,
				flavor: flavor,
				size: size,
				price: price,
				category,
				amount: 1,
				allYouCanEat,
			})
		);
	};

	const handleItemSub = (flavor: string, size: number, price: number) => {
		dispatch(
			subItem({
				name,
				flavor: flavor,
				size: size,
				price: price,
				category,
				amount: 1,
				allYouCanEat,
			})
		);
	};

	return (
		<div
			className="max-w-7xl grid grid-cols-[1fr_2fr] p-3 bg-white my-2 mx-auto"
			key={id}
		>
			<div className="h-60">
				<Image src={`/${img}`} alt={name} width={222} height={222} />
			</div>

			<div className="p-4 flex flex-col justify-between">
				<span className="text-xl text-red-700 font-semibold font-bebas">
					{name}
				</span>
				<span>{desc}</span>
				<br />

				{version.map((ver, index, versionsRef) => (
					<div
						key={index}
						className="flex flex-row justify-between mb-4 items-center"
					>
						{versionsRef.length > 1 ? (
							<div className="flex w-5/6 ">
								<input
									defaultChecked={ver.id === 1}
									id={name + String(ver.id)}
									type="radio"
									value={Number(ver.id)}
									name={name}
									className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-transparent dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									onChange={() => {
										handleSelectedItem(ver.id);
									}}
								/>
								<label
									htmlFor={name + String(ver.id)}
									className="ml-2 text-sm font-medium text-gray-900 dark:text-black"
								>
									{ver.name}{" "}
									{category === "food"
										? ver.amount === -1
											? ""
											: `${ver.amount} unidades `
										: ver.amount === -1
										? ""
										: `${ver.amount}ml `}
									R${ver.price.toFixed(2)}
								</label>
							</div>
						) : (
							<div className="flex items-center mb-4 w-5/6">
								<span>R${ver.price.toFixed(2)}</span>
							</div>
						)}
						<div className="w-1/6">
							<span>
								{isItemOnCart(ver.name, ver.amount) && (
									<>
										{itemQtyOnCart(ver.name, ver.amount) ===
										1 ? (
											<span
												className="text-red-700 hover:bg-gray-200 p-1 rounded flex flex-row justify-center cursor-pointer"
												onClick={() =>
													handleItemSub(
														ver.name,
														ver.amount,
														ver.price
													)
												}
											>
												<BsTrash />
											</span>
										) : (
											<div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent ">
												<button
													data-action="decrement"
													className="text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none"
													onClick={() =>
														handleItemSub(
															ver.name,
															ver.amount,
															ver.price
														)
													}
												>
													<span className="m-auto text-xl font-semibold text-red-700">
														−
													</span>
												</button>
												<input
													type="number"
													className="outline-none focus:outline-none text-center w-full bg-transparent font-semibold text-xl hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-black  outline-none hide-spin"
													name="custom-input-number"
													value={itemQtyOnCart(
														ver.name,
														ver.amount
													)}
													readOnly
													min={1}
												/>
												<button
													data-action="increment"
													className="text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer"
													onClick={() =>
														handleItemAdd(
															ver.name,
															ver.amount,
															ver.price
														)
													}
												>
													<span className="m-auto text-xl font-semibold text-red-700">
														+
													</span>
												</button>
											</div>
										)}
									</>
								)}
							</span>
						</div>
					</div>
				))}
				<br />
				<span className="text-center">
					({allYouCanEat ? t("allYouCanEat") : t("!allYouCanEat")})
				</span>
				<div>
					<button
						className="float-right bg-black hover:bg-yellow-500 text-white font-bold py-4 px-12 rounded"
						onClick={() =>
							handleItemAdd(
								selectedItem.flavor,
								selectedItem.size,
								selectedItem.price
							)
						}
					>
						{t("add")}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
