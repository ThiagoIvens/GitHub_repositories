import { RepositoryItem } from "../RepositoryItem";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList(props: any) {
  console.log(props);
  return (
    <section className="repository-list">
      <ul>
        {props.repos.map((repo: Repository) => {
          return <RepositoryItem key={repo.name} repository={repo} />;
        })}
      </ul>
    </section>
  );
}
