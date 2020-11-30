import defaultTheme from "../../assets/scss/theme/modules/_default.module.scss";

const INITIAL_STATE = {
  data: {
    master: false,
    theme: defaultTheme,
  },
};

const FETCH_MASTER = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "REQUEST":
      return INITIAL_STATE;
    case "SUCCESS":
      return { data: payload };
    case "ERROR":
      return { ...state, error: true };
    default:
      return state;
  }
};

export default FETCH_MASTER;
