import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BiGroup, BiMoneyWithdraw } from "react-icons/bi";
import { BsChatText } from "react-icons/bs";

const Checkout: React.FC = () => {
	const { t } = useTranslation();
	const [peopleAmount, setPeopleAmount] = useState(1);

	const handlePeopleIncrement = () => {
		setPeopleAmount((peopleAmount) => peopleAmount + 1);
	};

	const handlePeopleDecrement = () => {
		if (peopleAmount > 1) {
			setPeopleAmount((peopleAmount) => peopleAmount - 1);
		}
	};

	return (
		<div className="h-full flex flex-col justify-between">
			<div className="p-5 h-1/2 w-full text-center flex flex-col justify-start min-h-[12rem]">
				<div className="w-full h-1/6 flex flex-row items-center justify-center">
					<BiGroup size={25} />
					<span className="font-bold text-xl">
						{t("costPerPerson")}
					</span>
				</div>
				<div className="w-1/2">
					<label
						htmlFor="custom-input-number"
						className="w-full text-gray-700 text-sm font-semibold"
					>
						{t("numberOfPeople")}
					</label>
					<div className="flex flex-row h-14 w-full rounded-lg relative bg-transparent mt-1 border-2 border-red-700">
						<button
							data-action="decrement"
							className="text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
							onClick={() => handlePeopleDecrement()}
						>
							<span className="m-auto text-2xl font-semibold text-red-700">
								−
							</span>
						</button>
						<input
							type="number"
							className="outline-none focus:outline-none text-center w-full bg-transparent font-semibold text-2xl hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-black  outline-none hide-spin"
							name="custom-input-number"
							value={peopleAmount}
							readOnly
							min={1}
						/>
						<button
							data-action="increment"
							className="text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
							onClick={() => handlePeopleIncrement()}
						>
							<span className="m-auto text-2xl font-semibold text-red-700">
								+
							</span>
						</button>
					</div>
				</div>
			</div>
			<div className="p-5 h-1/2 flex flex-col justify-end min-h-[12rem]">
				<button className="bg-black hover:bg-yellow-500 text-white font-bold py-4 px-12 rounded m-2 w-full">
					<div className="w-full h-1/6 flex flex-row items-center justify-center">
						<BsChatText
							size={20}
							style={{
								transform: "scaleX(-1)",
							}}
						/>
						<span className="ml-2">{t("feedback")}</span>
					</div>
				</button>
				<button className="bg-black hover:bg-yellow-500 text-white font-bold py-4 px-12 rounded m-2 w-full">
					<div className="w-full h-1/6 flex flex-row items-center justify-center">
						<BiMoneyWithdraw
							size={20}
							style={{
								transform: "scaleX(-1)",
							}}
						/>
						<span className="ml-2">{t("checkout")}</span>
					</div>
				</button>
			</div>
		</div>
	);
};

export default Checkout;
