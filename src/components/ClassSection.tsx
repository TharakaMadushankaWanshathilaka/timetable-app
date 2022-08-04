export const ClassSection = () => {
	return (
		<section className="details" id="details-section">
			<div className="wrapper">
				<h2>Please select below</h2>
				<p>You only need to do this once 😁</p>
				<div className="notif-area" id="details-notif-area"></div>
				{/* <!-- faculty --> */}
				<div className="group">
					<label htmlFor="select-fac">Faculty: </label>
					<select id="select-fac">
						<option value="0">Select</option>
						<option value="Computing">Computing</option>
						<option value="Business">Business</option>
					</select>
				</div>
				{/* <!-- year of study --> */}
				<div className="group">
					<label htmlFor="select-year">Year of study: </label>
					<select id="select-year" disabled>
						<option value="0">Select</option>
					</select>
				</div>

				{/* <!-- semester --> */}
				<div className="group">
					<label htmlFor="select-sem">
						<span id="select-sem-label">Semester</span>:
					</label>
					<select id="select-1" disabled>
						<option value="0">Select</option>
					</select>
				</div>

				{/* <!-- specialization --> */}
				<div className="group">
					<label htmlFor="select-sem">
						<span id="select-spec-label">Specialization</span>:
					</label>
					<select id="select-2" disabled>
						<option value="0">Select</option>
					</select>
				</div>

				{/* <!-- subgroup --> */}
				<div className="group">
					<label htmlFor="select-sem">
						<span id="select-sub-label">Subgroup</span>:
					</label>
					<select id="select-3" disabled>
						<option value="0">Select</option>
					</select>
				</div>

				{/* <!-- button --> */}
				<button className="btn continue-btn" id="details-continue-btn">
					Continue<i className="icon fa-solid fa-arrow-right"></i>
				</button>
				<p className="text back-btn" id="details-back-btn">
					<i className="icon fa-solid fa-arrow-left"></i>Back
				</p>
			</div>
		</section>
	);
};
