export const MainSection = () => {
	return (
		<section className="main" id="main-section">
			<div className="wrapper">
				<div className="card greeting" id="card-greeting">
					{/* <!-- greeting row div --> */}
					<div className="row">
						<div className="greeting-text">
							<p className="text">
								Hi <span id="greeting-username"></span>,
							</p>
							<p className="text">
								<span id="greeting-wish"></span>!
							</p>
						</div>
						<div className="pfp"></div>
					</div>
					{/* <!-- time and weather div --> */}
					<div className="row" id="greeting-time-row">
						<p className="text">
							<span id="greeting-time">⌚</span>

							{/* <!-- <span id="greeting-time-suffix">AM</span> --> */}
						</p>
						<div className="weather-icon" id="weather-icon">
							{/* <!-- <i className="icon fa-solid fa-cloud-sun-rain"></i> --> */}
						</div>
					</div>
				</div>

				<div className="navigation">
					<i
						id="left-nav-icon"
						className="fa-solid fa-arrow-left"
					></i>
					<div id="date-display"></div>
					<i
						id="right-nav-icon"
						className="fa-solid fa-arrow-right"
					></i>
				</div>

				<div className="notice-container">
					<div className="notice">
						<div className="notice-head">
							<h3 className="notice-title">Important</h3>
							<h3>⚠️</h3>
						</div>
						<div className="notice-body">
							Please note that in some groups, timetables have
							been changed. Please check with your group and
							request to update if necessary.
						</div>
					</div>
					<div className="notice-body"></div>
				</div>

				<div className="cards" id="cards-container"></div>

				<div className="controls">
					<p className="text back-btn" id="main-back-btn">
						<i className="icon fa-solid fa-arrow-left"></i>Back
					</p>
					<p className="text" id="logout-btn">
						Logout{" "}
						<i className="icon fa-solid fa-right-from-bracket"></i>
					</p>
				</div>
				<div className="footer-credits">
					<a
						className="footer-link"
						href="https://docs.google.com/forms/d/e/1FAIpQLScDI8a5NeoFKYcau1ksgFEBuPAe3XP5tQBKvFu3R-kJ1jZqnA/viewform?usp=sf_link"
					>
						🐞 Report
					</a>
					<a
						className="footer-link"
						href="https://github.com/pawan-live/timetable-app"
					>
						🐙 Github
					</a>
					<a className="footer-link" href="./about.html">
						ℹ️ About
					</a>
				</div>
			</div>
		</section>
	);
};
