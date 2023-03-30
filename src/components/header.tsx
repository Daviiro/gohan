import Image from "next/image";
import Logo from "../assets/ricebowl.png";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { IoIosArrowBack, IoIosCart } from "react-icons/io";

const Header: React.FC = () => {
	const { t } = useTranslation();
	const router = useRouter();

	return (
		<nav className="h-16 bg-red-700 flex items-center justify-center top-0 sticky z-50">
			<div className="w-full flex flex-row  justify-between px-12">
				<div className="flex w-16 text-white font-semibold font-bebas text-2xl">
					{router.pathname === "/" ? (
						<></>
					) : (
						<button type="button" onClick={() => router.back()}>
							<span className="flex flex-rol items-center">
								<IoIosArrowBack size={36} /> {t("goBack")}
							</span>
						</button>
					)}
				</div>
				<div className="flex w-16">
					<Link href="/" className="flex flex-row w-11">
						<span className="text-white text-lg font-semibold font-['bangers'] mr-1">
							{t("appName")}
						</span>
						<Image src={Logo} alt="algo" width={55} />
					</Link>
				</div>
				<div className="flex w-16">
					<div className="flex w-16 text-white font-semibold font-bebas text-2xl">
						{router.pathname === "/cart" ? (
							<></>
						) : (
							<button
								type="button"
								onClick={() => router.push("/cart")}
							>
								<span className="flex flex-rol items-center">
									{t("cart")}
									<IoIosCart size={28} />
								</span>
							</button>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
