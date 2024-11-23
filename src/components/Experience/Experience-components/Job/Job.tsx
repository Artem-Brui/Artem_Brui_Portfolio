import styles from "./Job.module.scss";
import { dateCutter, periodCounter } from "./services";
import { content } from "../../../../content/mainContent_EN";

type Props = {
  jobIndex: number;
  job: {
    company: string;
    location: string;
    jobType: string;
    role: string;
    challenges: string[];
    achievements: string[];
    startDate: string;
    endDate: string;
  };
};

const Job: React.FC<Props> = ({ job, jobIndex }) => {
  
  const {
    company,
    location,
    jobType,
    role,
    challenges,
    achievements,
    startDate,
    endDate,
  } = job;

  const titles = { ...content.ExperienceSection.titles };
  
  const jobPeriod = `${dateCutter(jobIndex, startDate)} - ${endDate.length ? dateCutter(jobIndex, endDate) : 'present'}`

  return (
    <li key={company} className={styles.jobs__item}>
      <p className={styles.role}>{role}</p>

      <p className={styles.company}>{company}</p>

      <p className={styles.jobType}>{jobType}</p>

      <p className={styles.period}>
        {jobPeriod}
        <br/>
        {periodCounter(jobIndex, startDate, endDate)}
      </p>

      <p className={styles.location}>{location}</p>

      <ul className={styles.achievements}>
        <span>{titles.achievements}</span>:
        {achievements.map((achievement, i) => {
          return (
            <li key={i} className={styles.achievement}>
              {achievement}
            </li>
          )
        })}
      </ul>

      <ul className={styles.challenges}>
      <span>{titles.challenges}</span>:
        {challenges.map((challenge, i) => {
          return (
            <li key={i} className={styles.challenge}>
              {challenge}
            </li>
          )
        })}
      </ul>

     
    </li>
  );
};

export default Job;
