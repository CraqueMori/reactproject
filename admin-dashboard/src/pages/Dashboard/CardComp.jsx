import { Card, Row, Col } from "reactstrap";

const CardComp = () => {
  return (
    <>
        <Card className="overflow-hidden text-white border-0 credit-card-container">
          <Row>
            <Col>
              <div className="pai">
                <div>
                  <p className="font-weight-normal">Nome</p>
                  <p className="font-weight-bold">Luis "Craque" Mori</p>
                </div>
                <div className="pt-1">
                  <p className="font-weight-normal">Registro</p>
                  <p className="font-weight-bold">2115080071</p>
                </div>
                <div className="pt-2 d-flex justify-content-between">
                  <div>
                      <p class="font-weight-light text-xs">
                          Administrador
                      </p>
                      <p class="font-weight-medium text-sm">
                          01
                      </p>
                  </div>
                  <div className="imagecard">
                      <img src= "src\assets\images\imagecard-modified (2).png"/>
                  </div>
                  <div>

                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
    </>
  )
}

export default CardComp;
