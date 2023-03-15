import { NextPage } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import DefaultLayout from "@/components/DefaultLayout";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
	return (
		<DefaultLayout>
			<ul>
				<li>
					<Link href="/cart">Carrinho</Link>
				</li>
				<li>
					<Link href="/item">Todos os items</Link>
				</li>
			</ul>
		</DefaultLayout>
	);
};

export default Home;
