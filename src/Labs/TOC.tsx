import { useLocation } from "react-router";
export default function TOC() {
  const { pathname } = useLocation();

  return (
    <div>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a id="wd-a" href="#/Labs" className="nav-link">
            Labs
          </a>
        </li>
        <li className="nav-item">
          <a
            id="wd-a1"
            href="#/Labs/Lab1"
            className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}
          >
            Lab 1
          </a>
        </li>
        <li className="nav-item">
          <a
            id="wd-a2"
            href="#/Labs/Lab2"
            className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}
          >
            Lab 2
          </a>
        </li>
        <li className="nav-item">
          <a
            id="wd-a3"
            href="#/Labs/Lab3"
            className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}
          >
            Lab 3
          </a>
        </li>

        <li className="nav-item">
          <a
            id="wd-a4"
            href="#/Labs/Lab4"
            className={`nav-link ${pathname.includes("Lab4") ? "active" : ""}`}
          >
            Lab 4
          </a>
        </li>

        <li className="nav-item">
          <a
            id="wd-a5"
            href="#/Labs/Lab5"
            className={`nav-link ${pathname.includes("Lab5") ? "active" : ""}`}
          >
            Lab 5
          </a>
        </li>

        <li className="nav-item">
          <a id="wd-k" href="#/Kanbas" className="nav-link">
            Kanbas
          </a>
        </li>
        <li className="nav-item">
          <a
            id="wd-github"
            href="https://github.com/shufanfan/kanbas-react-web-app"
            className="nav-link"
          >
            View front-end code on GitHub
          </a>
        </li>

        <li className="nav-item">
          <a
            id="wd-github"
            href="https://github.com/shufanfan/kanbas-node-server-app"
            className="nav-link"
          >
            View back-end code on GitHub
          </a>
        </li>

        <li className="nav-item">
          <a
            id="wd-render"
            href="https://kanbas-node-server-app-bc7h.onrender.com"
            className="nav-link"
          >
            Server
          </a>
        </li>
      </ul>
      <p>Full Name: Shufan Chai</p>
      <p>Section: WEBDEV Full Summer 2024</p>
    </div>
  );
}
