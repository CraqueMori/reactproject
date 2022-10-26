import { Card } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AdComp = () => {
  return (
    <Card>
      <div className="ad-container position-relative h-100 p-4">
        <span className="image-cover"></span>
        <div className="d-flex flex-column flex-auto position-relative">
          <h5 className="pt-2 text-font-bold text-white">Reunião Time de Devs</h5>
          <p className="text-white">
            O time de desenvolvimento convidou você para uma reunião sobre o E-commerce
          </p>
          <a className="mt-auto mb-0 text-white">
            Link Meet
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" className="ml-1"/>
          </a>
        </div>
      </div>
    </Card>
  )
}

export default AdComp;
