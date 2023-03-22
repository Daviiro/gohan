import { NextPage } from "next";
import { Castoro, Inter } from "next/font/google";
import Link from "next/link";
import DefaultLayout from "@/components/layout";
import Carousel from "@/components/carousel";
import { BiFoodMenu } from "react-icons/bi";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
	return (
		<DefaultLayout>
			<Carousel />
			<div>
				<ul>
					<li>
						<div className="w-52 p-2 flex flex-rol justify-center">
							<Link href="/item">
								<div className="flex flex-rol items-center justify-center bg-red-500 w-48 h-12 rounded text-white">
									<BiFoodMenu />
									Cardápio
								</div>
							</Link>
						</div>
					</li>
				</ul>
			</div>
		</DefaultLayout>
	);
};

export default Home;
