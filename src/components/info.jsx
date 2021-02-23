import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Badge from "react-bootstrap/Badge";
import { Button } from "react-bootstrap";
const Info = (props) => {
  const { teams } = props;

  return (
    <>
      <div className="container-fluid text-center bg-light mt-1 col-12">
        <div class="container col-sm-12">
          <span>Today Match : </span>
          <span className="info glow">{teams[0]}</span> <span>vs </span>
          <span className="info glow">{teams[1]}</span>
          {teams.length > 2 ? (
            <>
              <span className="info glow">, {teams[2]}</span>
              <span>vs </span>
              <span className="info glow">{teams[3]}</span>
            </>
          ) : (
            ""
          )}
          <Button className="m-2 bg-dark">Watch Now</Button>
        </div>
      </div>
    </>
  );
};

export default Info;
