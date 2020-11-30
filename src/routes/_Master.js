import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Back, Button, Avatar, YourMaster, Loading } from "../components";

import "../assets/scss/routes/master.scss";

function _Master() {
  const dispatch = useDispatch();
  const { data } = useSelector(({ reducers }) => reducers);

  useEffect(() => {
    dispatch({ type: "REQUEST_MASTER" });
  }, [dispatch]);

  return (
    <div className={data.theme.background}>
      {!data.master && (
        <Loading
          progress={data.theme.progress}
          progressbar={data.theme.progressbar}
        />
      )}
      <div className="master">
        <Back className={data.theme.back} />
        <div className="flex flex--justify-center">
          <Button
            disabled={!data.master ? true : false}
            className={data.theme.btn}
            onClick={() => console.log("click")}
          />
          <div className="master--info">
            <Avatar className={data.theme.avatar} />
            {data.master && (
              <YourMaster
                className={data.theme.color}
                name={data.master.name}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default _Master;
