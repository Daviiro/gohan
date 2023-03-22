type Version = {
	id: number;
	name: string;
	amount: number;
	price: number;
};

export default interface ItemInterface {
	id: number;
	name: string;
	img: string;
	desc: string;
	category: string;
	version: Version[];
	allYouCanEat: boolean;
}
