import Image from "next/image";
import Logo from "../assets/ricebowl.png";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
	const { t } = useTranslation();
	return (
		<nav className="h-16 bg-red-700 flex items-center justify-center top-0 sticky">
			<div className="max-w-5xl flex flex-row items-center justify-center items-center">
				<div className="flex w-16">
					<Link href="/" className="flex flex-row w-11">
						<span className="text-white text-lg font-semibold font-['bangers'] mr-1">
							{t("AppName")}
						</span>
						<Image src={Logo} alt="algo" width={55} />
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Header;
