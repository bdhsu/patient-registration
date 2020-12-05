export default function updateAction(state, payload) {
    return {
        ...state,
        register: {
            ...state.register,
            ...payload,
        },
    };
}
