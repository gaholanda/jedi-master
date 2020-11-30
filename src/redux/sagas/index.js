import { put, takeEvery, all, call, race, delay } from "redux-saga/effects";

import { GetDarkSideMaster, GetLightSideMaster } from "../../api";
import lightTheme from "../../assets/scss/theme/modules/_light.module.scss";
import darkTheme from "../../assets/scss/theme/modules/_dark.module.scss";

function* getMaster() {
  yield put({ type: "REQUEST" });
  try {
    const response = yield race({
      light: call(GetLightSideMaster),
      dark: call(GetDarkSideMaster),
    });

    const dark = response.dark && {
      master: response.dark.data,
      theme: darkTheme,
    };
    const light = response.light && {
      master: response.light.data,
      theme: lightTheme,
    };

    yield delay(3000);
    yield put({ type: "SUCCESS", payload: dark || light });
  } catch (error) {
    yield put({ type: "ERROR" });
  }
}

function* requestMaster() {
  yield takeEvery("REQUEST_MASTER", getMaster);
}

export default function* rootSaga() {
  yield all([requestMaster()]);
}
