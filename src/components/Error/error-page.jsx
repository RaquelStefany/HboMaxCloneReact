import { useRouteError } from "react-router-dom";
import MenuHome from "../Home/Menu";
import './error-page.css'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error">
      <MenuHome />
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Desculpe, parece que ocorreu um erro.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}