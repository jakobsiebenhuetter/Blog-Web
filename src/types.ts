export interface ILink {
	name: string;
	href: string;
	target?: string;
}


export interface IBlogCardProps {
    title: string;
    description: string;
    href: string;
    date: string;
    disabled?: boolean;  
}