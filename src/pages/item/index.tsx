import useSWR from "swr";
import DefaultLayout from "@/components/layout";
import ItemCard from "@/components/itemCard";
import ItemInterface from "@/types/itemInterface";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Item: React.FC = () => {
	const { data, error, isLoading } = useSWR<ItemInterface[]>(
		"/api/staticData",
		fetcher
	);

	if (error) return <div>Failed to load</div>;
	if (isLoading) return <div>Loading...</div>;
	if (!data) return null;

	return (
		<DefaultLayout>
			{data.map((item: ItemInterface, index: number) => (
				<ItemCard
					key={index}
					name={item.name}
					img={item.img}
					category={item.category}
					version={item.version}
					allYouCanEat={item.allYouCanEat}
				/>
			))}
		</DefaultLayout>
	);
};

export default Item;
