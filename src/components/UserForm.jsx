import React, { useReducer } from 'react';

const initialState = {
    firstName: {
        value: '',
        error: "First Name must be 1 characters long!"
    },
    lastName: {
        value: '',
        error: "Last Name must be 1 characters long!"
    },
    email: {
        value: '',
        error: "Please type your email!"
    }
};


function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
    };
}

export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }

    return (
        <>
            {/* {JSON.stringify(state)} */}
            <form action="|">
                <div className="form-group text-center col-lg-6 offset-lg-3 mt-2">
                    <label>
                        <span>First Name:</span>{' '}
                        <input className="form-control"
                            name="firstName"
                            // value={state.firstName}
                            onChange={handleChange}
                        />
                        {state.firstName.value !== null && (
                            <p className="text-danger">{state.firstName.error}</p>
                        )}
                    </label>
                </div>
                <div className="form-group text-center col-lg-6 offset-lg-3 mt-2">
                    <label>
                        <span>Last Name:</span>{' '}
                        <input className="form-control"
                            name="lastName"
                            // value={state.lastName}
                            onChange={handleChange}
                        />
                        {state.lastName.value !== null && (
                            <p className="text-danger">{state.lastName.error}</p>
                        )}
                    </label>
                </div>
                <div className="form-group text-center col-lg-6 offset-lg-3 mt-2">
                    <label>
                        <span>Email:</span>{' '}
                        <input className="form-control"
                            name="email"
                            // value={state.email}
                            onChange={handleChange}
                        />
                        {state.email.value !== null && (
                            <p className="text-danger">{state.email.error}</p>
                        )}
                    </label>
                </div>
            </form>
        </>
    )
};
