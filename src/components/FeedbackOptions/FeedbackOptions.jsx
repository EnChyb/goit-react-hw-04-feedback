import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({options, onButtonClick}) => {

    return (
        <div className={css.buttons}>
            {options.map(option => (
                <button className={css.button} key={option} type="button" onClick={() =>onButtonClick (option)}>{option}</button>               
            ))}

        </div>
    )

}

FeedbackOptions.propTypes = {
    option: PropTypes.string,

}