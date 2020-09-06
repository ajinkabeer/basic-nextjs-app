import Head from "next/head";
import { useQuery, gql } from "@apollo/client";
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

  if (loading) {
    return (
      <header>
        <h2>Ajin Kabeer</h2>
        <h3>Loading...</h3>
      </header>
    );
  }

  console.log(data);

  return (
    <>
      <Head>
        <title>GraphQLNextResume</title>
      </Head>
      <div className={styles.container}>
        <h1>Resume</h1>
      </div>
    </>
  );
}
