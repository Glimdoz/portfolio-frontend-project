import gitHubIcon from "./gitHub-black.svg";
import "./BtnGitHub.css";

export default function BtnGitHub({ link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={gitHubIcon} alt="" />
      GitHub repo
    </a>
  );
}
