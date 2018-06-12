const reducer = (state = { comments: [] }, action) => {
  switch (action.type) {
    case "POPULATE_COMMENTS":
      return {
        ...state,
        comments: action.comments
      };
    case "TOGGLE_VISIBILITY":
      return {
        ...state,
        comments: state.comments.map(
          comment =>
            comment.id === action.id
              ? { ...comment, hidden: !Boolean(comment.hidden) }
              : { ...comment }
        )
      };
    case "ADD_COMMENT":
      const newComment = [
        {
          id: Math.floor(Math.random() * 900 + 100),
          body: action.body,
          name: action.name
        }
      ];
      return {
        ...state,
        comments: newComment.concat(state.comments)
      }
    default:
      return state;
  }
};

export default reducer;
