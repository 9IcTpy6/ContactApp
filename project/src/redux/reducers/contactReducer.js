const initialState = [
    {
        id: 0,
        name: "Raman Sharma",
        number: 1234567890,
        email: "Recreation@org.ua"
    },
    {
        id: 1,
        name: "Test Name",
        number: 987654321,
    },
];

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            state = [...state, action.payload];
            return state;
        default:
             return state;
    }
};

export default contactReducer;
