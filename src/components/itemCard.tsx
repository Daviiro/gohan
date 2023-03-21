import ItemInterface from "@/types/itemInterface";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { addItem } from "@/store/slices/onCartItems";
import { useDispatch } from "react-redux";
import { useState } from "react";

const ItemCard: React.FC<ItemInterface> = ({
	id,
	name,
	img,
	desc,
	category,
	version,
	allYouCanEat,
}) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const [chosenItem, setChosenItem] = useState({
		flavor: version[0].name,
		size: version[0].amount,
		price: version[0].price,
	});

	const handleFlavorChange = (newChoice: {
		flavor: string;
		size: number;
		price: number;
	}) => {
		setChosenItem(newChoice);
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
					version.map((ver) => (
						<div className="flex items-center mb-4">
							<input
								defaultChecked={ver.id === 1}
								id={name + String(ver.id)}
								type="radio"
								value=""
								name={name}
								className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
					))
				) : (
					<span>R${version[0].price.toFixed(2)}</span>
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
