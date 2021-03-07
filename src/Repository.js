import React from 'react';
import './Repository.css';

function Repository({ value, className }) {
	return (
		<div className={`repository ${className}`}>
			<a href={value.url} target="_blank"><h3 className={`title left ${className}`}>{value.title}</h3></a>
			<div>
				<span className="small">{value.type}</span>
				{value.shields && <div className={`shields ${className}`}>
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
				</div>}
				<div className={`description ${className}`}>
					<div className="content">
						{value.description}
					</div>
					<div className="actionLink">
						<a href={value.url} target="_blank">{value.action || 'View on GitHub'}</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Repository;
