import useSWR from "swr";
import DefaultLayout from "@/components/layout";
import ItemCard from "@/components/itemCard";
import ItemInterface from "@/types/itemInterface";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Item: React.FC = () => {
	const { data, error, isLoading } = useSWR<ItemInterface[]>(
		"/api/items",
		fetcher
	);

	if (error) return <div>Failed to load</div>;
	if (isLoading) return <div>Loading...</div>;
	if (!data) return null;

	return (
		<DefaultLayout>
			<div className="bg-gray-100 p-3">
				{data.map((item: ItemInterface, index: number) => (
					<ItemCard
						key={index}
						name={item.name}
						img={item.img}
						desc={item.desc}
						category={item.category}
						version={item.version}
						allYouCanEat={item.allYouCanEat}
					/>
				))}
			</div>
		</DefaultLayout>
	);
};

export default Item;
