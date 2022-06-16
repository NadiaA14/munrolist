import React from "react";

const MunroSelect = ({munros, onMunroSelected}) => {

    const munroOptions = munros.map((munro, index) => {
        return <option value={index} key={index}>{munro.name}</option>
    })

    const handleChange = (event) => {
        const chosenMunro = munros[event.target.value];
        onMunroSelected(chosenMunro)
    }

    return (
        <>
        <select onChange={handleChange}> 
            <option selected disabled value="">
                Choose a Munro
            </option>
            {munroOptions}
        </select>
        </>
    )
}

export default MunroSelect;