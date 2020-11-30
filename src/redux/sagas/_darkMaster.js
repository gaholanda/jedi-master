import { call, put } from "redux-saga/effects";
import { GetDarkSideMaster } from "../../api";

export function* darkMaster() {
  try {
    const response = yield call(GetDarkSideMaster);

    yield put({ type: "FETCH_MASTER", payload: response });
  } catch (error) {
    yield put({ type: "FETCH_FAILED", error });
  }
}
