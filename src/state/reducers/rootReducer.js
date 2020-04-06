import initialState from "../store/initialState";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ARTICLES":
      return {
        ...state,
        articleList: action.payload.articleList,
      };
    case "SHOW_ARTICLE":
      return {
        ...state,
        readArticle: action.payload.readArticle,
        showArticleList: false,
      };
    case "HIDE_ARTICLE":
      return {
        ...state,
        readArticle: undefined,
        showArticleList: true,
        ...action.payload,
      };
    case "AUTHENTICATE":
      return {
        ...state,
        ...action.payload,
      };
    case "PAYMENT_FORM":
      return {
        ...state,
        ...action.payload,
        readArticle: undefined,
      };
    case "SUCCESS_MESSAGE":
      return {
        ...state,
        ...action.payload,
        showPaymentForm: false,
      };
    case "TO_THE_NEWS":
      return {
        ...state,
        ...action.payload,
        showArticleList: true,
      };
    case "SHOW_LOGIN_FORM":
      return {
        ...state,
        ...action.payload,
      };
    case "LOGIN":
      return {
        ...state,
        ...action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        ...action.payload,
      };
    case "PREMIUM":
      return {
        ...state,
        ...action.payload,
      };
    case "SET_CURRENT_SESSION":
      return {
        ...state,
        ...action.payload,
      };
    case "HIDE_LOGIN_FORM":
      return {
        ...state,
        ...action.payload,
        showLoginForm: false,
        showLoginButton: true
      };

    default:
      return state;
  }
};
export default rootReducer;
