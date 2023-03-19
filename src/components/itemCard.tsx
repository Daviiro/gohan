import ItemInterface from "@/types/itemInterface";
import Image from "next/image";

const ItemCard: React.FC<ItemInterface> = ({
	name,
	img,
	category,
	version,
	allYouCanEat,
}) => {
	return (
		<div className="grid grid-cols-[1fr_2fr] p-1">
			<Image src={`/${img}`} alt={name} width={222} height={222} />
			<div>
				<span>{name}</span>
			</div>
		</div>
	);
};

export default ItemCard;
