import React from 'react';
import './Repository.css';

function Repository({ value, className }) {
	return (
		<div className={`repository ${className}`}>
			<h3 className={`title left ${className}`}>{value.title}</h3>
			<div>
				<span className="small">{value.type}</span>
				<div className={`shields ${className}`}>
					{value.shields.map(shield => (
						<a
							key={shield.alt}
							href={shield.url}
							target="_blank"
							className="shield"
						>
							<img src={shield.src} alt={shield.alt} />
						</a>
					))}
				</div>
				<div className={`description ${className}`}>
					{value.description}
					<br />
					<a href={value.url} target="_blank">View on GitHub</a>
				</div>
			</div>
		</div>
	);
}

export default Repository;
