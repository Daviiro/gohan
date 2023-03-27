import { RootState } from "@/store/store";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const OrderInfo: React.FC = () => {
	const itemsOnCart = useSelector((state: RootState) => state.cart);
	const { t } = useTranslation();

	const orderTotal = itemsOnCart.reduce((accumulator, object) => {
		return accumulator + object.price * object.amount;
	}, 0);

	return (
		<div className="flex flex-col justify-between p-5 font-bebas border-r-4 border-dotted h-[93.5vh]">
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
						{itemsOnCart.map((item, index) => (
							<tr key={index}>
								<td className="w-1/6">{item.amount}</td>
								<td className="w-3/6">
									{item.name} - {item.flavor}
									{item.size !== -1 ? ` - ${item.size}` : ""}
								</td>
								<td className="w-1/6">
									R$ {item.price.toFixed(2)}
								</td>
								<td className="w-1/6">
									R$ {(item.price * item.amount).toFixed(2)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className="h-1/6 border-t-4 border-dotted  w-full flex flex-row justify-between items-center text-xl min-h-[4rem]">
				<div>
					<span>{t("subtotal")}</span>
				</div>
				<div>
					<span>R$ {orderTotal.toFixed(2)}</span>
				</div>
				<div className="h-full flex flex-col items-center justify-around">
					<span>{t("total")}</span>
					<span className="font-bold text-4xl">
						R$ {orderTotal.toFixed(2)}
					</span>
				</div>
			</div>
		</div>
	);
};

export default OrderInfo;
