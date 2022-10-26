import { Card, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ActivityComp = () => {
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle className="mb-5">Activity</CardTitle>
          <ul className="verti-timeline list-unstyled">
            <li className="event-list">
              <div className="event-timeline-icon">
                <FontAwesomeIcon icon="fa-solid fa-dice-one" style={{color: '#3258F2'}} />
              </div>
              <div className="flex-shrink-0 d-flex">
                <div className="me-3">
                  <h5 className="font-size-14">
                    1 Jan{" "}
                  </h5>
                </div>
                <div className="flex-grow-1">
                  <div>Primeiro dia do E-Commerse</div>
                </div>
              </div>
            </li>

            <li className="event-list">
              <div className="event-timeline-icon">
              <FontAwesomeIcon icon="fa-solid fa-sack-dollar" />
              </div>
              <div className="d-flex">
                <div className="flex-shrink-0 me-3">
                  <h5 className="font-size-14">
                    13 Fev{" "}
                  </h5>
                </div>
                <div className="flex-grow-1">
                  <div>
                    <Link to="#">A empresa alcançou 100 vendas!!! </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="event-list active">
              <div className="event-timeline-icon">
                <FontAwesomeIcon icon="fa-solid fa-money-bill-trend-up" style={{ color: '#A93F55'}} />
              </div>
              <div className="flex-shrink-0 d-flex">
                <div className="me-3">
                  <h5 className="font-size-14">
                    20 Mar{" "}
                    <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2" />
                  </h5>
                </div>
                <div className="flex-grow-1">
                  <div> O projeto se PAGOU!!! agora o que vier é lucro!!!</div>
                </div>
              </div>
            </li>
            <li className="event-list active">
              <div className="event-timeline-icon">
                <FontAwesomeIcon icon="fa-solid fa-cart-arrow-down" />
              </div>
              <div className="flex-shrink-0 d-flex">
                <div className="me-3">
                  <h5 className="font-size-14">
                    31 Mai{" "}
                  </h5>
                </div>
                <div className="flex-grow-1">
                  <div>Compras do dia das mães não bateu a meta</div>
                </div>
              </div>
            </li>
          </ul>
          <div className="text-center mt-4">
            <Link
              to=""
              className="btn btn-primary  btn-sm"
            >
              View More <i className="mdi mdi-arrow-right ms-1" />
            </Link>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default ActivityComp;
