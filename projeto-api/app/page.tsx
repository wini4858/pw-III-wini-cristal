import Image from "next/image";

export default async function Home() {
  const resposta = await fetch('http://localhost:3000/api');
  const dados = await resposta.json();

  return (
    <div>
      {dados.map((nomes: any) => (
        <p key={nomes.id}>{nomes.dados.Nomes} {nomes.dados.Sobrenome}</p>
      ))}
    </div>
  );
}
