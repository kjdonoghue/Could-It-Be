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

function QuestionOne(props) {
    const classes = useStyles();

    const [value, setValue] = React.useState('no');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleNext = (value) => {
        props.onUpdateTraining(value)
        props.onIncrementSteps()
        console.log(value)

    }


    return (
        <div >
            <h3>Is this training mandated by the state or federal government, human resources or corporation?</h3>

            <FormControl component="fieldset">
                <RadioGroup aria-label="options" name="options" value={value} onChange={handleChange}>
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
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
        onUpdatePurpose: (purpose) => dispatch({type: "ON_UPDATE_PURPOSE", payload: purpose})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(QuestionOne)