export interface ILink {
	name: string;
	href: string;
	target?: string;
}

export interface IHeaderProps {
    links: ILink[]
}

export interface ISidebarProps {
    links: ILink[]
}

export interface IBlogCardProps {
    title: string;
    description: string;
    href: string;
    date: string;
    disabled?: boolean;
    
}