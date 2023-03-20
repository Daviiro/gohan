type Version = {
	name: string;
	amount: number;
	price: number;
};

export default interface ItemInterface {
	name: string;
	img: string;
	desc: string;
	category: string;
	version: Version[];
	allYouCanEat: boolean;
}
