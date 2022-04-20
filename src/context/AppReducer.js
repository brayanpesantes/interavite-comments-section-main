export default function appReducer(state, action) {
    switch (action.type) {
        case "ADD_COMMENT":
            return {
                Comments: [...state.Comments, action.payload]
            }
        case "DELETE_COMMENT":
            return {
                Comments: state.Comments.filter(comment => comment.id !== action.payload)
            }
            break;

        default:
            break;
    }
}