"use client";
import { useAuth, useClerk } from "@clerk/nextjs";
import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react";
import Link from "next/link";

const items = [
	{ title: "Home", url: "/", icon: HomeIcon },
	{
		title: "Subscriptions",
		url: "/feed/subscriptions",
		icon: PlaySquareIcon,
		auth: true,
	},
	{ title: "Trending", url: "/feed/trending", icon: FlameIcon },
];

export const MainSection = () => {
	const clerk = useClerk();
	const { isSignedIn } = useAuth();

	return (
		<SidebarGroup>
			<SidebarGroupContent>
				<SidebarMenu>
					{items.map((items) => (
						<SidebarMenuItem key={items.title}>
							<SidebarMenuButton
								tooltip={items.title}
								asChild
								isActive={false}
								onClick={(e) => {
									if (!isSignedIn && items.auth) {
										e.preventDefault();
										return clerk.openSignIn();
									}
								}}
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
