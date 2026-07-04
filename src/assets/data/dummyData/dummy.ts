import type { ILink } from "../../../types";

interface ILinks {
	links: ILink[]
}


export const headerProps: ILinks = 
{
	links: [
		{
			name: "Home",
			href: "/Blog-Web/",
		},
		{
			name: "Blog",
			href: "/Blog-Web/blog/main",
			// target: "_blank",
		},
		// {
		// 	name: "LLMs",
		// 	href: "#",
		// },
	]
}


export const sidebarProps: ILinks = 
{ 
	links: [
		{
			name: "Home",
			href: "/Blog-Web/",
		},
		
		{
			name: "Blog",
			href: "/Blog-Web/blog/main",
			// target: "_blank",
		},
		
		// {
		// 	name: "LLMs",
		// 	href: "#",
		// },
	]
}
