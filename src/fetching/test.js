import ENVIROMENT from './utils/constants/enviroments.js'

const consultaDePrueba = async () => {
	try {
		const response = await fetch(
			ENVIROMENT.API_URL + '/api/status/ping',
			{
				method: 'GET'
			}
		)

		console.log(response)
		const data = await response.json()
		console.log(data)
	}
	catch(error){
		console.error("error al consultar", error)
	}
}

consultaDePrueba()