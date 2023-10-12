import * as React from 'react';
import { TiWeatherPartlySunny } from 'react-icons/ti';


function App() {

return (
	<>
		<div class="flex flex-col items-center">
			<div class="flex flex-row text-6xl font-bold gap-3 mx-auto max-w-fit items-center mt-20">
				<TiWeatherPartlySunny/>
				<div class="text-4xl max-w-fit">Weather App</div>
			</div>

			<div class="flex flex-row mt-10 gap-2">
				<input type="text" placeholder="Enter location here" className="input input-bordered min-w-[400px] max-w-xs " />
				<button className="btn btn-accent">Search</button>
			</div>
		</div>
		
	</>
)
}

export default App
