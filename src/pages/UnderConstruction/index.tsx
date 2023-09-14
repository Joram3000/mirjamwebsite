import "./style.css";
import mirjamfoto from "../../assets/mirjamfoto.jpeg";

const UnderConstructionPage = () => {
  return (
    <div className="container">
      <div className="title">
        <img src={mirjamfoto} className="mirjamFoto" />
        <h1>Kroon training en advies</h1>
      </div>
      <div className="textBlock">
        <h2>ONDER CONSTRUCTIE</h2>
        <p>
          Mijn site is onder constructie omdat ik aan een nieuwe site werk.
          <br></br>Maar dat betekent niet dat ik “Under-construction” ben.
        </p>
        <p>
          Ik ben volop bezig met het helpen ontwikkelen van mensen door middel
          van trainingen, het verder helpen brengen van
          samenwerkingsvraagstukken en individuele-en teamcoaching.
        </p>
        <p>
          De planning is dat mijn nieuwe site eind oktober te bezoeken is. Nu is
          er informatie te vinden op mijn LinkedIn profiel: Mirjam
          Kroon-Hoekendijk Wil je in contact komen met mij?
        </p>
      </div>

      <a
        className="linkedInBlock"
        target="_blank"
        href="https://www.linkedin.com/in/mirjam-kroon-hoekendijk"
      >
        <strong>Ga naar linked in</strong>
      </a>

      <div className="textBlock">
        <h2>CONTACTGEGEVENS</h2>
        <p>
          Wil je in contact komen met mij?<br></br>
          Stuur een e-mail naar <strong>mirjam@kroontrainingadvies.com</strong>
          <br></br>
          Of bel: <strong>0653507815</strong>
        </p>
        <p>
          Mirjam Kroon-Hoekendijk<br></br>
          Trainer en (team-)coach Mirjam Kroon Training en Advies<br></br>
          KvK 23083220<br></br>
          BTW NL 00192641B33
        </p>
        <p>
          <strong>Adres:</strong>
          <br></br>
          Dorpsweg 71<br></br>
          4223 ND Hoornaar (ZH)
        </p>
      </div>
    </div>
  );
};

export default UnderConstructionPage;
