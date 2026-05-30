import type { IHeaderProps, ISidebarProps } from "../../../types";

export const headerProps: IHeaderProps = 
{
	links: [
		{
			name: "Home",
			href: "/Blog-Web/",
		},
		{
			name: "Blog",
			href: "/Blog-Web/blog",
			// target: "_blank",
		},
		{
			name: "LLMs",
			href: "#",
		},
	]
}


export const sidebarProps: ISidebarProps = 
{ 
	links: [
		{
			name: "Home",
			href: "/Blog-Web/",
		},
		
		{
			name: "Blog",
			href: "/Blog-Web/blog",
			// target: "_blank",
		},
		
		{
			name: "LLMs",
			href: "#",
		},
	]
}
