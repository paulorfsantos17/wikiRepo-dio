import { useState } from "react";
import github from "../../assets/github.png";
import { Button } from "../../components/Button";

import { Input } from "../../components/Input";
import { ItemRepo } from "../../components/ItemRepo";
import { Container } from "./styles.js";
import { api } from "../../services/api";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSeachRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);

    if (data.id) {
      const isExist = repos.find(repo => repo.id === data.id)
      if(!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo('')
        return
      }
      alert("Repositorio já foi adicionado")
    }
    alert('Repositorio não existe')
  };

  const handleRemoveRepo = (id) => {
  
    const newRepo = repos.filter((repo) => repo.id !== id);
    setRepos(newRepo)

  }



  return (
    <Container>
      <img src={github} alt="logo github" width={72} height={72} />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSeachRepo} />
      {repos[0]
        ? repos.map((repo) => (
            <ItemRepo
              title={repo.name}
              description={repo.description}
              key={repo.id}
              url={repo.html_url}
              removeRepo={() => handleRemoveRepo(repo.id)}
            />
          ))
        : null}
    </Container>
  );
}

export default App;
