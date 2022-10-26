import { Card, CardBody, CardTitle, Progress } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CityRankings = () => {
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle className="mb-4">Cidades Top em Vendas</CardTitle>
          <div className="text-center">
            <div className="mb-4">
              <FontAwesomeIcon icon="fa-solid fa-location-dot" />
            </div>
            <h3>720</h3>
            <p>Manaus</p>
          </div>

          <div className="table-responsive mt-4">
            <table className="table align-middle table-nowrap">
              <tbody>
                <tr>
                  <td style={{ width: "30%" }}>
                    <p className="mb-0">Iranduba</p>
                  </td>
                  <td style={{ width: "25%" }}>
                    <h5 className="mb-0">130</h5>
                  </td>
                  <td>
                    <Progress
                      value="94"
                      color="primary"
                      className="bg-transparent progress-sm"
                      size="sm"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="mb-0">Itaquatiara</p>
                  </td>
                  <td>
                    <h5 className="mb-0">110</h5>
                  </td>
                  <td>
                    <Progress
                      value="82"
                      color="secondary"
                      className="bg-transparent progress-sm"
                      size="sm"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="mb-0">Parintins</p>
                  </td>
                  <td>
                    <h5 className="mb-0">95</h5>
                  </td>
                  <td>
                    <Progress
                      value="70"
                      color="danger"
                      className="bg-transparent progress-sm"
                      size="sm"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </>
  )
}

export default CityRankings
