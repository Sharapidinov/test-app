import React from 'react';

const Variant = ({ value, register, regName}) => {
    return (
        <div className="mb-2">
            <input {...register("rightAnswer")} value={value} name="rightAnswer" className="me-2" type="radio"/>
            <input {...register(regName)} placeholder={regName} type="text"/>
        </div>
    );
};

export default Variant;