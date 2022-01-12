/** @format */
interface MaterialComponentProps {
	className?: string;
	children?: React.ReactNode;
}

type Colors =
	| 'primary'
	| 'warning'
	| 'danger'
	| 'success'
	| 'info'
	| 'rose'
	| 'gray'
	| 'white';

type TitleType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
