import moment from 'moment'

export const dateFormat = (d, f = 'DD/MM/YYYY') => moment(d).format(f)
