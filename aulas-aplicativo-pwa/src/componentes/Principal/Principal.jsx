import { Link } from "react-router-dom";
import "./Principal.css";
import { IoMdArrowRoundBack } from "react-icons/io";

function Principal(props) {
  return (
    <main className="Principal_root">
        <div className="principal_titulo">
          {props.voltarPara && <Link to={props.voltarPara}>{<IoMdArrowRoundBack style={{borderRadius: "20px", border: "1px solid black"}}/>}</Link>}

          <h2>{props.titulo}</h2>

      </div>
          {props.children}
    </main>
  );
}

export default Principal;
