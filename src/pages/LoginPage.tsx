import Logo from "assets/Logo";
import Button from "components/Button";
import InputField from "components/InputField";
import { usePostApi } from "hooks/useApi";
import {
	ArrowCircleRight2,
	EyeSlash,
	Login as LoginIcon,
	NoteFavorite,
	Profile,
} from "iconsax-react";
import { useState } from "react";
import { useNavigate } from "react-router";

type LoginStatus = {
	status: "Success" | "Failed" | "Restricted";
};

export default function LoginPage() {
	const navigate = useNavigate();

	const [loginDoe, tryLogin] = usePostApi<LoginStatus>(
		"https://localhost:5000/auth/login",
		(res) => {
			console.log(res.status);

			switch (res.status) {
				case "Success":
					alert("logged in");
					navigate("/");
					break;
				case "Failed":
					alert("Wrong username / password");
					break;
				case "Restricted":
					alert("Restricted");
					break;
			}
		},
		(err) => {
			console.log(err);
			alert("Failed");
		}
	);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="w-screen h-screen bg-blue/50 flex justify-center items-center">
			<div className="bg-white rounded-lg overflow-hidden grid sm:grid-cols-2 w-full sm:w-4/5 md:w-3/4 xl:w-1/2">
				<div className="p-5 flex flex-col items-center gap-5 text-center justify-evenly">
					<Logo />
					<p>
						وارد حساب کاربری خود شوید و تجربه بهترین خرید را با ما
						داشته باشید
					</p>
					<Button
						text="ثبت نام"
						onClick={() => navigate("/auth/register")}
						color="black"
						icon={<NoteFavorite variant="Bold" />}
						className="px-9"
					/>
					<a href="/" className="flex items-center gap-2 text-sm">
						بازگشت به صفحه ی نخست
						<ArrowCircleRight2 size={20} />
					</a>
				</div>
				<div className="p-5 bg-blue/20 flex flex-col items-center gap-5 text-center">
					<p className="text-2xl font-bold">ورود</p>

					<InputField
						name="نام کاربری"
						placeholder="لطفا نام کاربری خود را وارد نمایید"
						setText={setUsername}
						icon={
							<Profile variant="Bold" size={20} color="#2388ff" />
						}
						className="w-full min-w-0"
					/>

					<InputField
						name="رمز عبور"
						placeholder="لطفا رمز عبور خود را وارد نمایید"
						setText={setPassword}
						icon={
							<EyeSlash
								variant="Bold"
								size={20}
								color="#2388ff"
							/>
						}
						isPassword
						className="w-full min-w-0"
					/>

					<a dir="rtl" href="/auth/forgot">
						رمز عبور خود را فراموش کرده ام!
					</a>

					<Button
						text="ورود"
						onClick={async () => {
							// TODO Check first

							tryLogin({
								username: username,
								password: password,
							});
						}}
						filled
						icon={<LoginIcon />}
						className="px-10"
					/>
				</div>
			</div>
		</div>
	);
}
