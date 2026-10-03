import Image from "next/image";
import ButtonSecondary from "./ButtonSecondary";

export default function ProfileCard() {
  return (
    <article className="profile-card">

      {/* FOTO */}
      <div className="profile-card__photo-wrapper">
        <Image
          src="/paloma.png"
          alt="Paloma Bessa"
          width={200}
          height={200}
          className="profile-card__photo"
        />
      </div>


      {/* IDENTIFICAÇÃO */}
      <div className="profile-card__identity">

        <h2 className="profile-card__name">
          Paloma Bessa
        </h2>

        <p className="profile-card__role">
          Product Designer
        </p>

      </div>


      {/* FRASE */}
      <p className="profile-card__quote">
        “Eu não preciso ter todas as respostas.
        Sei como encontrá-las.”
      </p>


      {/* DIVISÓRIA */}
      <div className="profile-card__divider" />


      {/* FORMAÇÃO */}
      <div className="profile-card__education">

        <h3 className="profile-card__education-title">
          Formação
        </h3>

        <p className="profile-card__education-text">
          Pós-graduação em UX Design — ESPM
          <br />
          Bacharelado em Comunicação — PUC SP
        </p>

      </div>


      {/* BOTÃO */}
      <div className="profile-card__action">

        <a
          href="/Paloma_Bessa_Product_Designer_Senior.pdf"
          download
          className="profile-card__download"
        >
          <ButtonSecondary
            icon={
              <Image
                src="/icons/download.svg"
                alt=""
                width={24}
                height={24}
              />
            }
          >
            Baixar currículo
          </ButtonSecondary>
        </a>

      </div>

    </article>
  );
}
