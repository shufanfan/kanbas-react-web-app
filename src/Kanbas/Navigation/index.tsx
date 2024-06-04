import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KanbasNavigation() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<string>("");

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("Account")) {
      setActiveLink("Account");
    } else if (path.includes("Dashboard")) {
      setActiveLink("Dashboard");
    } else if (path.includes("Courses")) {
      setActiveLink("Courses");
    } else if (path.includes("Calendar")) {
      setActiveLink("Calendar");
    } else if (path.includes("Inbox")) {
      setActiveLink("Inbox");
    } else if (path.includes("Labs")) {
      setActiveLink("Labs");
    } else {
      setActiveLink("");
    }
  }, [location]);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const linkClasses = (link: string) =>
    `list-group-item text-center border-0 ${
      activeLink === link ? "bg-white text-danger" : "text-white bg-black"
    }`;

  return (
    <div
      id="wd-kanbas-navigation"
      className="list-group rounded-0"
      style={{ width: "105px" }}
    >
      <a
        id="wd-neu-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 d-flex flex-column align-items-center justify-content-center"
      >
        <img src="/images/NEU.png" width="75px" alt="NEU logo" />
      </a>

      <a
        id="wd-account-link"
        href="#/Kanbas/Account"
        className={`d-flex flex-column align-items-center justify-content-center ${linkClasses(
          "Account"
        )}`}
        onClick={() => handleLinkClick("Account")}
      >
        <FaRegCircleUser className="fs-1 text text-white" />
        Account
      </a>

      <a
        id="wd-dashboard-link"
        href="#/Kanbas/Dashboard"
        className={`d-flex flex-column align-items-center justify-content-center ${linkClasses(
          "Dashboard"
        )}`}
        onClick={() => handleLinkClick("Dashboard")}
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        Dashboard
      </a>

      <a
        id="wd-course-link"
        href="#/Kanbas/Courses"
        className={`d-flex flex-column align-items-center justify-content-center ${linkClasses(
          "Courses"
        )}`}
        onClick={() => handleLinkClick("Courses")}
      >
        <LiaBookSolid className="fs-1 text-danger" />
        Courses
      </a>

      <a
        id="wd-calendar-link"
        href="#/Kanbas/Calendar"
        className={`d-flex flex-column align-items-center justify-content-center ${linkClasses(
          "Calendar"
        )}`}
        onClick={() => handleLinkClick("Calendar")}
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        Calendar
      </a>

      <a
        id="wd-inbox-link"
        href="#/Kanbas/Inbox"
        className={`d-flex flex-column align-items-center justify-content-center ${linkClasses(
          "Inbox"
        )}`}
        onClick={() => handleLinkClick("Inbox")}
      >
        <FaInbox className="fs-1 text-danger" />
        Inbox
      </a>

      <a
        id="wd-labs-link"
        href="#/Labs"
        className={`d-flex flex-column align-items-center justify-content-center ${linkClasses(
          "Labs"
        )}`}
        onClick={() => handleLinkClick("Labs")}
      >
        <LiaCogSolid className="fs-1 text-danger" />
        Labs
      </a>
    </div>
  );
}
