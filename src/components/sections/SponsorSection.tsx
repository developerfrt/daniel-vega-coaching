import sponsorImage from '../../assets/images/sponsor/xfit-mercado-libre-straight.png'
import { Reveal } from '../common/Reveal'

const MERCADO_LIBRE_URL =
  'https://listado.mercadolibre.com.pe/_CustId_575227818'

export const SponsorSection = () => (
  <section className="sponsor section-shell" aria-labelledby="sponsor-title">
    <div className="container">
      <Reveal>
        <a
          className="sponsor__link"
          href={MERCADO_LIBRE_URL}
          target="_blank"
          rel="noopener noreferrer sponsored"
          aria-label="Comprar ropa fitness XFIT en Mercado Libre"
        >
          <img
            src={sponsorImage}
            alt="Patrocinado por XFIT. Ropa fitness de alto rendimiento. Comprar en Mercado Libre."
            loading="lazy"
          />
          <span id="sponsor-title" className="sr-only">
            Patrocinado por XFIT
          </span>
        </a>
      </Reveal>
    </div>
  </section>
)
