import "./styles.css";
import Moment from "moment";

interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
    forks: number;
    stargazers_count: number;
    updated_at: string;
  };
}

export function RepositoryItem(props: RepositoryItemProps) {
  const formatDate = Moment(props.repository?.updated_at).format("MMM Do YY");

  return (
    <li className="list-item mt-5">
      <div className="row">
        <div className="w-100">
          <h3 className="m-0 mb-2">
            <b>{props.repository?.name ?? "Nome desconhecido"}</b>
          </h3>
          <div className="row pr-2">
            <div className="row items-center justify-center">
              <h6 className="m-0">
                {props.repository?.stargazers_count ?? "0"}&nbsp;
              </h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                  fill="#ff0"
                />
              </svg>
            </div>
            <div className="row items-center justify-center">
              <h6 className="m-0">{props.repository?.forks ?? "0"}&nbsp;</h6>
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
            <div className="row items-center justify-center">
              <h6 className="m-0">{formatDate ?? "0"}&nbsp;</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 448 512"
              >
                <path
                  d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                  fill="#fff"
                />
              </svg>
            </div>
            <a href={props.repository?.html_url ?? "#"} target="_blank">
              Acessar Repositorio
            </a>
          </div>
        </div>
      </div>
      <p className="description">
        {props.repository?.description ?? "Sem descrição"}
      </p>
    </li>
  );
}
