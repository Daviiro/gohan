import Header from "./Header";

interface Props {
	children: React.ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
	return (
		<>
			<Header />
			<span className="text-xl">Aparecer em todas paginas</span>
			{children}
		</>
	);
};

export default DefaultLayout;
