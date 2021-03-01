import React from 'react';
import {connect} from 'react-redux'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function Complexity(props) {
    const classes = useStyles();

    const [value, setValue] = React.useState('5');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleNext = (value) => {
        props.onUpdateComplexity(value)
        props.onIncrementSteps()
        console.log(value)

    }


    return (
        <div >
            <h3>1.On a scale of 1-10, how complex is the topic?</h3>

            <FormControl component="fieldset">
                <RadioGroup row aria-label="options" name="options" value={value} onChange={handleChange}>
                    <FormControlLabel value="1" control={<Radio />} label="1 (Simple)" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <FormControlLabel value="4" control={<Radio />} label="4" />
                    <FormControlLabel value="5" control={<Radio />} label="5" />
                    <FormControlLabel value="6" control={<Radio />} label="6" />
                    <FormControlLabel value="7" control={<Radio />} label="7" />
                    <FormControlLabel value="8" control={<Radio />} label="8" />
                    <FormControlLabel value="9" control={<Radio />} label="9" />
                    <FormControlLabel value="10" control={<Radio />} label="10 (Mind-Boggling)" />
                </RadioGroup>
            </FormControl>

            <div className={classes.root}>
                <Button variant="contained" onClick={() => handleNext(value)}>Next</Button>
            </div>


        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        steps: state.steps
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onIncrementSteps: () => dispatch({type: "ON_INCREMENT_STEPS"}),
        onUpdateComplexity: (complexity) => dispatch({type: "ON_UPDATE_COMPLEXITY", payload: complexity})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Complexity)