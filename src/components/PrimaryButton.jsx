import React from 'react'

const PrimaryButton = ({title, icon}) => {
  return (
    <>
        <button className="cssbuttons-io">
            <span>
                {icon}
                {title}
            </span>
        </button>

    </>
  )
}

export default PrimaryButton
