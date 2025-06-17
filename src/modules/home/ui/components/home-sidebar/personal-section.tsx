"use client";

import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { HistoryIcon, ListVideoIcon, ThumbsUpIcon } from "lucide-react";
import Link from "next/link";

const items = [
	{
		title: "History",
		url: "/playlists/history",
		icon: HistoryIcon,
		auth: true,
	},
	{
		title: "Liked Videos",
		url: "/playlists/liked",
		icon: ThumbsUpIcon,
		auth: true,
	},
	{
		title: "All Playlists",
		url: "/playlists",
		icon: ListVideoIcon,
		auth: true,
	},
];

export const PersonalSection = () => {
	return (
		<SidebarGroup>
			<SidebarGroupLabel>You</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					{items.map((items) => (
						<SidebarMenuItem key={items.title}>
							<SidebarMenuButton
								tooltip={items.title}
								asChild
								isActive={false}
								onClick={() => {}}
							>
								<Link
									href={items.url}
									className="flex item-center gap-4"
								>
									<items.icon />
									<span className="text-sm">
										{items.title}
									</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
};
