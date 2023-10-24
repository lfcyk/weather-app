import * as React from 'react';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { BsSearch } from 'react-icons/bs'


function App() {
	const [searchTerm, setSearchTerm] = React.useState("");
	const handleChange = event => {
	  setSearchTerm(event.target.value);
	};

	const onSearchClick = () => {
		console.log(searchTerm);
	}
return (
	<>
		<div className="flex flex-col items-center">
			<div className="flex flex-row text-6xl font-bold gap-3 mx-auto max-w-fit items-center mt-20">
				<TiWeatherPartlySunny/>
				<div className="text-4xl max-w-fit">Weather App</div>
			</div>

			<div className="flex flex-row mt-10 gap-2">
				<input type="text" placeholder="Enter location here" className="input input-bordered min-w-[400px] max-w-xs" value={searchTerm} onChange={handleChange} />
				<button className="btn btn-accent" onClick={onSearchClick}><BsSearch/></button>
			</div>
		</div>
		
	</>
)
}

export default App
