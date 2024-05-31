import React from 'react'
import PropTypes from "prop-types";

export const ContentData = ({title, digit, color, icon}) => {
    return (
        <div className="col-md-4 mb-4">
            <div className={`card border-left-${color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}>{title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{digit}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas fa-${icon} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ContentData.prototype = {
    title: PropTypes.string,
    digit: PropTypes.number,
    color: PropTypes.string,
    icon: PropTypes.string
}

ContentData.defaultProps = {
    title: 'El titulo no esta definido',
    digit: 0,
    color: 'danger',
    icon: 'fish'
}