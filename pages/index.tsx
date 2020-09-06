import Head from "next/head";
import { useQuery, gql } from "@apollo/client";
import { format } from "date-fns";
import { print } from "graphql/language/printer";
import styles from "../styles/Home.module.css";

const ResumeQuery = gql`
  query ResumeQuery {
    bio {
      name
      tagline
      email
      objective
      github
      website
      linkedin
    }
    positions {
      id
      title
      company
      startDate
      endDate
      years
      months
      achievements
    }
  }
`;

export default function Home() {
  const { data, error, loading } = useQuery(ResumeQuery);

  if (error) {
    return <span>Error....</span>;
  }

  if (loading) {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h2>Ajin Kabeer</h2>
          <h3>Loading...</h3>
        </header>
      </div>
    );
  }

  const { bio, positions } = data;

  return (
    <>
      <Head>
        <title>GraphQLNextResume</title>
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2>{bio.name}</h2>
          <h3>{bio.tagline}</h3>
        </header>
        <div className={styles.split}>
          <div className={styles.left}>
            <h2>Contact</h2>
            <p>
              <strong>Email</strong>
              <a className={styles.link} href={`mailto:${bio.email} `}>
                {" " + bio.email}
              </a>
            </p>
            <p>
              <strong>GitHub</strong>
              <a className={styles.link} href={`${bio.github}`}>
                {" " + new URL(bio.github).host}
              </a>
            </p>
            <p>
              <strong>LinkedIn</strong>
              <a className={styles.link} href={`${bio.linkedin}`}>
                {" " + new URL(bio.linkedin).host}
              </a>
            </p>
            <p>
              <strong>Blog</strong>
              <a className={styles.link} href={`${bio.website}`}>
                {" " + new URL(bio.website).host}
              </a>
            </p>
            <pre>{print(ResumeQuery)}</pre>
          </div>
          <div className={styles.right}>
            <h2>Objective</h2>
            <p>{bio.objective}</p>
            <h2>Positions</h2>
            {positions.map((position) => {
              const length = [
                position.years > 0 ? `${position.years} years` : null,
                position.months > 0 ? `${position.months} months` : null,
              ]
                .filter((str) => str)
                .join(" ");
              return (
                <div key={position.id} className={styles.position}>
                  <h3>{position.title}</h3>
                  <p className={styles.light}>{position.company}</p>
                  <p>
                    {format(new Date(position.startDate), "MMM yyyy ")} -{" "}
                    {position.endDate
                      ? format(new Date(position.endDate), "MMM yyyy ")
                      : "Present"}{" "}
                    ({length})
                  </p>
                  <ul>
                    {position.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
