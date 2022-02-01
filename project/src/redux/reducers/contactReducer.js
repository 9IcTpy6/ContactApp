const initialState = [
    {
        id: 0,
        name: "Raman Sharma",
        number: 1234567890,
    },
    {
        id: 1,
        name: "Test Name",
        number: 987654321,
    },
];

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
             return state;
    }
};

export default contactReducer;
