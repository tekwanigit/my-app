import {useState} from 'react';

function Abc(props){
	let [obj, setObj] = useState({id: 1, name: "Arun"});

	const changeName = () => {
		if(obj.name === "Arun"){
			setObj(prevState => {return {...prevState, name: "Golu"}});
		} else {
			setObj(prevState => {return {...prevState, name: "Arun"}})
		}
	}
	return(
		<>
			<h1>{props.name}</h1>
			<h2>{obj.name}</h2>
			<button onClick={changeName}>Change Name</button>
		</>
	)
}

export default Abc