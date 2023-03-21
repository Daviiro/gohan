import { useTranslation } from "react-i18next";

const ItemList: React.FC = () => {
	const { t } = useTranslation();
	return (
		<div className="flex flex-col justify-between p-2 font-bebas border-r-4 border-dotted h-[93.5vh]">
			<div className="h-5/6 overflow-y-auto text-xl">
				<table className="table-auto w-full h-auto text-left">
					<thead>
						<tr>
							<th>{t("qty")}</th>
							<th>{t("product")}</th>
							<th>{t("unit")}</th>
							<th>{t("value")}</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="w-1/6">1</td>
							<td className="w-3/6">Malcolm Lockyer</td>
							<td className="w-1/6">R$ 19,61</td>
							<td className="w-1/6">R$ 19,61</td>
						</tr>
						<tr>
							<td className="w-1/6">1</td>
							<td>The Eagles</td>
							<td>R$ 19,72</td>
							<td>R$ 19,61</td>
						</tr>
						<tr>
							<td className="w-1/6">1</td>
							<td>Earth, Wind, and Fire</td>
							<td>R$ 19,75</td>
							<td>R$ 19,61</td>
						</tr>
						<tr>
							<td className="w-1/6">1</td>
							<td>Earth, Wind, and Fire</td>
							<td>R$ 19,75</td>
							<td>R$ 19,61</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className="h-1/6 border-t-4 border-dotted  w-full flex flex-row justify-between items-center text-xl min-h-[4rem]">
				<div>
					<span>{t("subtotal")}</span>
				</div>
				<div>
					<span>R$ 19,61</span>
				</div>
				<div className="h-full flex flex-col items-center justify-around">
					<span>{t("total")}</span>
					<span className="text-xl font-bold text-3xl">R$ 19,61</span>
				</div>
			</div>
		</div>
	);
};

export default ItemList;
