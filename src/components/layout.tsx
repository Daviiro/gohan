import Header from "./header";

interface Props {
	children: React.ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};

export default DefaultLayout;
