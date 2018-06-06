import React from 'react'

export const Container = props => <div className={"container" + ( props.fluid ? '-fluid' : '' )}>{props.children}</div>
export const Row = props => <div className="row">{props.children}</div>
export const Column = (props) => (
    <div className={
        props.mobile || props.tablet || props.desktop  ?
            ( props.mobile ? 'col-' + props.mobile + ' col-sm-' + props.mobile + ' ' : '' ) +
            ( props.tablet ? 'col-md-' + props.tablet + ' ' : '' ) +
            ( props.desktop ? 'col-lg-' + props.desktop + ' ' : '' )
        : "col"
    }>{props.children}</div>
)
