"use client";

import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
export const AuthButton = () => {
	return (
		<>
			<SignedIn>
				<UserButton></UserButton>
				{/* add menu item for studio and user profile  */}
			</SignedIn>
			<SignedOut>
				<SignInButton mode="modal">
					<Button
						variant="outline"
						className="px-4 py-2 text-small font-medium text-blue-600 hover:text-blue-500 border-blue-500/20
        rounded-full shadow-none [&svg: size-5]"
					>
						<UserCircleIcon />
						Sign in
					</Button>
				</SignInButton>
			</SignedOut>
		</>
	);
};
