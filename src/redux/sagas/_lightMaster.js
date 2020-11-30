import { call, put } from "redux-saga/effects";
import { GetLightSideMaster } from "../../api";

export function* lightMaster() {
  try {
    const response = yield call(GetLightSideMaster);

    yield put({ type: "FETCH_MASTER", payload: response });
  } catch (error) {
    yield put({ type: "FETCH_FAILED", error });
  }
}
