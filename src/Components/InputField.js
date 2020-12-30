import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
	root: {
		alignItems: 'middle',
		justifyContent: 'center',
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
		},
	},
	input: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		paddingTop: '24px',
	},
	inputField: {
		width: '90vw',
	},
	inputParameters: {
		width: '45vw',
	},
}));

export default function MultilineTextFields() {
	const classes = useStyles();
	const [value, setValue] = React.useState('Controlled');

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<form className={classes.root} noValidate autoComplete="off">
			<div className={classes.input}>
				<TextField
					className={classes.inputField}
					id="outlined-multiline-static"
					label="Data File"
					multiline
					rows={8}
					defaultValue="Paste your data here"
					variant="outlined"
				/>
			</div>
			<div className={classes.input}>
				<TextField
					className={classes.inputParameters}
					id="outlined-multiline-static"
					label="Input Field 1"
					defaultValue="x"
					variant="outlined"
				/>
				<TextField
					className={classes.inputParameters}
					id="outlined-multiline-static"
					label="Input Field 2"
					defaultValue="y"
					variant="outlined"
				/>
			</div>
		</form>
	);
}
