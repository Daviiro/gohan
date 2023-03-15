import Image from "next/image";
import Logo from "../assets/ricebowl.png";

const Header: React.FC = () => {
	return (
		<nav className="h-16 bg-red-700">
			<div className="max-w-5xl flex flex-row items-center justify-center items-center h-full">
				<div className="flex w-16">
					<span className="text-white text-lg font-semibold">
						Gohan
					</span>
					<Image src={Logo} alt="algo" width={55} />
				</div>
			</div>
		</nav>
	);
};

export default Header;
