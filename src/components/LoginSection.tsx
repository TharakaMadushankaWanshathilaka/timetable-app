export const LoginSection = () => {
	return (
		<section className="login" id="login-section">
			<div className="wrapper">
				<h2 className="logo-title">Timetable 📚</h2>
				<div className="notif-area" id="login-notif-area"></div>

				<button
					className="btn login-btn"
					style={{
						display: "none",
					}}
				>
					Login with Snapchat
					<i className="icon fa-brands fa-snapchat"></i>
				</button>
				<div
					className="separator"
					style={{
						display: "none",
					}}
				></div>
				<input
					type="text"
					placeholder="Enter your name"
					id="username-field"
				/>

				<button className="btn continue-btn" id="continue-btn">
					Continue<i className="icon fa-solid fa-arrow-right"></i>
				</button>
			</div>
		</section>
	);
};
