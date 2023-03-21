import ItemInterface from "@/types/itemInterface";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { addItem } from "@/store/slices/onCartItems";
import { useDispatch } from "react-redux";

const ItemCard: React.FC<ItemInterface> = ({
	name,
	img,
	desc,
	category,
	version,
	allYouCanEat,
}) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();

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
									amount: 10,
									price: 10,
									category,
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
