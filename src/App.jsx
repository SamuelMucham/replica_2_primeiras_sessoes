import s from "./App.module.css";  
import "./App.css"; 
import orkut from "/logo.png";


function App() {
  return (
    <>
      <nav className={s.menu}>
        <a href="#s1">orkut</a>
        <a href="#s2">enviar</a>
      </nav>
       <main>
          <section className={s.s1} id="s1">
            <div className={s.left}>
              <img className={s.logo} src={orkut} alt="logo.png" />
            </div>
            <div className={s.right}>
              <h2 className={s.tittle}> ORKUT</h2>
              <p className={s.paragraph}>
                Sou o Orkut. 17 anos atrás eu criei uma pequena rede social
                enquanto eu trabalhava no Google como engenheiro de software. Em
                apenas alguns anos, essa rede social se tornou o orkut.com com
                mais de 300 milhões de usuários. Acredito que o orkut.com
                encontrou sua comunidade porque reuniu tantas vozes diversas de
                todo o mundo em um só lugar. Trabalhamos muito para tornar o
                orkut.com uma comunidade onde o ódio e a desinformação não
                fossem tolerados. Nos dedicamos muito para tornar o orkut.com
                uma comunidade onde você pudesse conhecer pessoas reais que
                compartilhavam seus mesmos interesses, não apenas pessoas que
                curtiram e comentaram em suas fotos. O mundo precisa de
                gentileza agora mais do que nunca. Há tanto ódio online nos dias
                de hoje, e nossas opções para encontrar e construir conexões
                reais são poucas e bem escassas. Sempre acreditei que uma
                amizade é mais do que um pedido de amizade, e dediquei minha
                vida para ajudar milhões de vocês a construir conexões
                autênticas com seus vizinhos, familiares, funcionários e os
                belos estranhos que entram em suas vidas. Nossas ferramentas
                online devem nos servir, não nos dividir. Elas devem proteger
                nossos dados, não vendê-los. Elas devem nos dar esperança, não
                medo e ansiedade. A melhor rede social é aquela que enriquece
                sua vida, mas não a manipula. Eu quero que você seja capaz de
                ser o seu verdadeiro eu, online e offline. Eu quero que você
                seja capaz de fazer conexões duradouras. Eu quero ajudá-lo a
                fazer isso com todo o meu coração. Eu sou uma pessoa otimista.
                Acredito no poder da conexão para mudar o mundo. Acredito que o
                mundo é um lugar melhor quando nos conhecemos um pouco mais. É
                por isso que criei a primeira rede social do mundo quando era
                estudante de pós-graduação em Stanford. É por isso que eu trouxe
                o orkut.com para tantos de vocês ao redor do mundo. E é por isso
                que estou construindo algo novo. Vejo você em breve! Inscreva-se
                abaixo para receber atualizações e seja o primeiro a saber.
              </p>
            </div>
          </section>
           <section className={s.s1} id="s2">
          <div className={s.right}>
            <h2 className={s.tittle}>Samuel Mucham</h2>
            <p className={s.paragraph}>
              programador iniciante,estou terminando o ensino medio, estudo
              programação em um curso do senai
            </p>
          </div>
        </section>  
        </main> 
    </>
  )
}

export default App