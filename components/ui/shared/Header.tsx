import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../button";

const Header = () => {
	return (
		<header className="w-full border-b">
			<div className="wrapper flex items-center justify-between">
				<Link href="/" className="w-36">
					<Image
						src="/assets/images/logo.svg"
						width={128}
						height={38}
						alt="Evently Logo"
					/>
				</Link>
				<div className="flex w-32 justify-end gap-3">
					<SignedOut>
						<Button asChild className="rounded-full" size="lg">
							<Link href="/sign-in">Login</Link>
							{/* <SignInButton /> */}
						</Button>
					</SignedOut>
					<SignedIn>
						<UserButton />
					</SignedIn>
				</div>
			</div>
		</header>
	);
};

export default Header;
