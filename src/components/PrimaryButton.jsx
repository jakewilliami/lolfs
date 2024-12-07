import React from 'react'

const PrimaryButton = ({Name, icon}) => {
  return (
    <>
        <button className="cssbuttons-io">
            <span>
                {icon}
                {Name}
            </span>
        </button>

    </>
  )
}

export default PrimaryButton
