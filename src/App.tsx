import { ClassSection } from "./components/ClassSection";
import { LoginSection } from "./components/LoginSection";
import { MainSection } from "./components/MainSection";
import { SplashScreen } from "./components/SplashScreen";

export const App = () => {
	return (
		<>
			<div id="message-content"></div>

			<SplashScreen />

			<LoginSection />

			<ClassSection />

			<MainSection />
		</>
	);
};
