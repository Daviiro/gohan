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
	const [chosenItem, setChosenItem] = useState({
		flavor: version[0].name,
		size: version[0].amount,
		price: version[0].price,
	});

	const handleChoiceChange = (id: number) => {
		if (version[id - 1]) {
			const newChoice = {
				flavor: version[id - 1].name,
				size: version[id - 1].amount,
				price: version[id - 1].price,
			};
			setChosenItem(newChoice);
		}
	};

	const isOnCart = (item_version: string, item_size: number) => {
		const exists = itemsOnCart.find(
			(item) =>
				item.name === name &&
				item.flavor === item_version &&
				item.size === item_size
		);
		return exists;
	};

	const amountOnCart = (item_version: string, item_size: number) => {
		const exists = isOnCart(item_version, item_size);

		return exists?.amount;
	};

	return (
		<div className="max-w-7xl grid grid-cols-[1fr_2fr] p-3 bg-white my-2 mx-auto">
			<div className="h-60">
				<Image src={`/${img}`} alt={name} width={222} height={222} />
			</div>

			<div className="p-4 flex flex-col justify-between">
				<span className="text-xl text-red-700 font-semibold font-bebas">
					{name}
				</span>
				<span>{desc}</span>
				<br />

				{version.length > 1 ? (
					version.map((ver, index) => (
						<div
							key={index}
							className="flex flex-row justify-between"
						>
							<div className="flex items-center mb-4 w-5/6">
								<input
									defaultChecked={ver.id === 1}
									id={name + String(ver.id)}
									type="radio"
									value={Number(ver.id)}
									name={name}
									className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-transparent dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									onChange={() => {
										handleChoiceChange(ver.id);
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
							<div className="w-1/6">
								<span>
									{isOnCart(ver.name, ver.amount) ? (
										<button
											className="float-right bg-transparent hover:bg-gray-200 text-white font-bold  px-4 w-10 text-center rounded
											flex justify-center items-center select-none focus:outline-none focus:shadow-outline"
											onClick={() =>
												dispatch(
													subItem({
														name,
														flavor: ver.name,
														size: ver.amount,
														price: ver.price,
														category,
														amount: 1,
														allYouCanEat,
													})
												)
											}
										>
											{amountOnCart(
												ver.name,
												ver.amount
											) === 1 ? (
												<span className="text-red-700">
													<BsTrash />
												</span>
											) : (
												<span className="text-red-700">
													-
												</span>
											)}
										</button>
									) : (
										<></>
									)}
								</span>
							</div>
						</div>
					))
				) : (
					<div className="flex flex-row justify-between">
						<div className="flex items-center mb-4 w-5/6">
							<span>R${version[0].price.toFixed(2)}</span>
						</div>
						<div className="w-1/6">
							{isOnCart(version[0].name, version[0].amount) ? (
								<button
									className="float-right bg-transparent hover:bg-gray-200 text-white font-bold  px-4 w-10 text-center rounded
											flex justify-center items-center select-none focus:outline-none focus:shadow-outline"
									onClick={() =>
										dispatch(
											subItem({
												name,
												flavor: version[0].name,
												size: version[0].amount,
												price: version[0].price,
												category,
												amount: 1,
												allYouCanEat,
											})
										)
									}
								>
									{amountOnCart(
										version[0].name,
										version[0].amount
									) === 1 ? (
										<span className="text-red-700">
											<BsTrash />
										</span>
									) : (
										<span className="text-red-700">-</span>
									)}
								</button>
							) : (
								<></>
							)}
						</div>
					</div>
				)}
				<br />
				<span className="text-center">
					({allYouCanEat ? t("allYouCanEat") : t("!allYouCanEat")})
				</span>
				<div>
					<button
						className="float-right bg-black hover:bg-yellow-500 text-white font-bold py-4 px-12 rounded"
						onClick={() =>
							dispatch(
								addItem({
									name,
									flavor: chosenItem.flavor,
									size: chosenItem.size,
									price: chosenItem.price,
									category,
									amount: 1,
									allYouCanEat,
								})
							)
						}
					>
						{t("Add")}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
