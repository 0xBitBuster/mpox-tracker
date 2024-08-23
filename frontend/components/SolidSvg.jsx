import React from "react"

export default function SolidSvg({ width, height, src, color = "#000", fit = false }) {
	return <div>
		<style jsx>{`
			div {
				width: ${width}px;
				height: ${height}px;
				background-color: ${color};
				mask: url(${src});
				mask-repeat: no-repeat;
				mask-position: center;
				mask-size: ${fit ? "contain": "auto"};
			}
		`}</style>
	</div>
}