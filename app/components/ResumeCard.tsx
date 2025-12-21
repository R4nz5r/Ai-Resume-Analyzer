import { Link } from "react-router";
import ScoreCircle from "./ScoreCircle";

const ResumeCard = ({
  resume: { id, companyName, jobTitle, feedback, imagePath },
}: {
  resume: Resume;
}) => {
  return (
    <Link
      to={`/resume/${id}`}
      className="resume-card animate-in fade-in duration-1000"
    >
      <div className="resume-card-header">
        <div className="flex flex-col gap-2">
          <h2 className="text-black! font-fold wrap-break-word">
            {companyName}
          </h2>
          <h3 className="text-lg wrap-break-word text-gray-500">{jobTitle}</h3>
        </div>
        <div className="shrink-0">
          <ScoreCircle score={feedback.overallScore} />
        </div>
      </div>
      <div className="gradient-border">
        <div className="w-full h-[350px] overflow-y-auto no-scrollbar">
          <img
            src={imagePath}
            alt="resume"
            loading="lazy"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </Link>
  );
};

export default ResumeCard;
