import React, { Component } from 'react'

export const required = value => value ? undefined : 'obrigatório'

export const mobileNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Número de celular inválido.'
    : undefined

export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{8})$/i.test(value)
    ? 'Número de telefone inválido.'
    : undefined

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'E-mail inválido'
    : undefined

export const onlyNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Apenas números.'
    : undefined

export const renderField = ({
    name, input, label, type, placeholder,
    meta: {
        touched, error, warning
    }
}) => (
    <div className="form-group">
        { label ? <label htmlFor={name}>{label}</label> : '' }
        <input {...input} placeholder={placeholder} type={type} className="form-control" />
        {touched && ((error && <small className="form-text text-muted">{error}</small>) || (warning && <small className="form-text text-muted">{warning}</small>))}
    </div>
)

export const renderTextarea = ({
    name, input, label, type, placeholder,
    meta: {
        touched, error, warning
    }
}) => (
    <div className="form-group">
        { label ? <label htmlFor={name}>{label}</label> : '' }
        <textarea {...input} placeholder={placeholder} type={type} className="form-control" />
        {touched && ((error && <small className="form-text text-muted">{error}</small>) || (warning && <small className="form-text text-muted">{warning}</small>))}
    </div>
)

export const renderSelect = field => (
    <div className="form-group">
        { field.label ? <label htmlFor={field.name}>{field.label}</label> : '' }
        <select {...field.input} className="form-control">
            {field.options}
        </select>
            {field.touched && field.error && <div className="error">{field.error}</div>}
    </div>
)

export const checkboxField = ({
    input, label, type,
    meta: {
        touched, error, warning
    }
}) => (
    <div className="form-check">
        <input {...input} type={type} className="form-check-input" />
        <label className="form-check-label">{label}</label>
        {touched && ((error && <small className="form-text text-muted">{error}</small>) || (warning && <small className="form-text text-muted">{warning}</small>))}
    </div>
)

export class fileField  extends Component{
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }

    onChange = (e) => {
        const { input: { onChange } } = this.props
        onChange(e.target.files[0])
    }

    render(){

        const { input: { value } } = this.props
        const {input,label, required, meta, } = this.props

        return(
            <div>
                <label>{label}</label>
                <div>
                    <input
                        type='file'
                        accept='.jpg, .png, .jpeg'
                        onChange={this.onChange}
                        />
                </div>
            </div>
        )
    }
}



export class checkboxGroup extends Component {

    checkboxGroup = () => {
        let {label, required, options, input, meta} = this.props;

        return options.map((option, index) => {
            return (
            <div className="checkbox" key={index}>
                <label>
                    <input type="checkbox"
                           name={`${input.name}[${index}]`}
                           value={option.name}
                           checked={input.value.indexOf(option.name) !== -1}
                           onChange={(event) => {
                               const newValue = [...input.value];
                               if (event.target.checked) {
                                   newValue.push(option.name);
                               } else {
                                   newValue.splice(newValue.indexOf(option.name), 1);
                               }

                               return input.onChange(newValue);
                           }}/>
                    {option.name}
                </label>
            </div>)
        });
    }

    render() {
        return (
            <div>
                {this.checkboxGroup()}
            </div>
        )
    }
}
