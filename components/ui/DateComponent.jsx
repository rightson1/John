import { formatDate } from '../../lib/date'

const DateComponent = ({ dateString, options, ...rest }) => {
    return (
        <time dateTime={dateString} {...rest}>
            {formatDate(dateString, options)}
        </time>
    )
}

export default DateComponent