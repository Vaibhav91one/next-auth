"use client"

import React, { use } from "react";
import { Card } from "@nextui-org/card";
import { CardHeader } from "@nextui-org/card";
import { CardBody } from "@nextui-org/card";
import Image from "next/image";
import { Tabs, Tab, } from "@nextui-org/tabs";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";

export default function App() {
	const [selected, setSelected] = React.useState("login");
	return (
		<div>
			<div className="flex flex-col w-full">
				<Card className="flex max-w-full w-[500px] h-[450px] ">
					<CardBody className="overflow-hidden">
						<Tabs
							fullWidth
							size="md"
							aria-label="Tabs form"
							selectedKey={selected}
							onSelectionChange={setSelected}
						>
							<Tab key="login" title="Login">
								<form className="flex flex-col justify-center gap-4 my-10">
									<Input isRequired label="Email" placeholder="Enter your email" type="email" />
									<Input
										isRequired
										label="Password"
										placeholder="Enter your password"
										type="password"
									/>
									<div className="flex py-2 px-1 justify-between">
										<Checkbox
											classNames={{
												label: "text-small",
											}}
										>
											Remember me
										</Checkbox>
										<Link color="primary" href="#" size="sm">
											Forgot password?
										</Link>
									</div>
									<p className="text-center justify-end mt-5">
										Need to create an account?{" "}
										<Link size="sm" onPress={() => setSelected("sign-up")}>
											Sign up
										</Link>
									</p>
									<div className="flex gap-2 justify-end">
										<Button fullWidth color="primary">
											Login
										</Button>
									</div>

								</form>
							</Tab>
							<Tab key="sign-up" title="Sign up">
								<form className="flex flex-col gap-4 h-[300px] my-10 ">
									<Input isRequired label="Name" placeholder="Enter your name" type="password" />
									<Input isRequired label="Email" placeholder="Enter your email" type="email" />
									<Input
										isRequired
										label="Password"
										placeholder="Enter your password"
										type="password"
									/>
									<p className="text-center ">
										Already have an account?{" "}
										<Link size="sm" onPress={() => setSelected("login")}>
											Login
										</Link>
									</p>
									<div className="flex gap-2 justify-end">
										<Button fullWidth color="primary">
											Sign up
										</Button>
									</div>
								</form>
							</Tab>
						</Tabs>
					</CardBody>
				</Card>
			</div>
		</div>
	);
}
