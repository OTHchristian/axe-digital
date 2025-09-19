import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/ui/footer";
import NavBar from "@/components/ui/navBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white p-4 xl:p-10">
      <NavBar></NavBar>
      <main className="xl:pr-10 xl:pl-10">
        <section className="w-full xl:p-5 mt-5" id="accueil">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            <div className="rounded-xl text-black p-5 xl:p-10">
              <h1 className="text-3xl text-center md:text-5xl font-semibold">Agence de scale pour</h1>
              <h1 className="text-3xl text-center md:text-5xl font-semibold"> les <span className="text-blue-500">e-commerces</span> et les marques</h1>
              <p className="mt-10">De la création à l&apos;optimisation, nous propulsons votre e-commerce avec des stratégies éprouvées qui génèrent des résultats mesurables dès les premiers mois.</p>
              <div>
                <div className="flex items-center gap-2.5 mt-3.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="oklch(62.3% 0.214 259.815)" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                  </svg>
                  <p>Image de marque entièrement personnalisée</p>
                </div>
                <div className="flex items-center gap-2.5 mt-3.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="oklch(62.3% 0.214 259.815)" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                  </svg>
                  <p>Des stratégies publicitaires éprouvées</p>
                </div>
                <div className="flex items-center gap-2.5 mt-3.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="oklch(62.3% 0.214 259.815)" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                  </svg>
                  <p>Des stratégies publicitaires éprouvées</p>
                </div>
                <div className="flex items-center gap-2.5 mt-3.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="oklch(62.3% 0.214 259.815)" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                  </svg>
                  <p>Des stratégies publicitaires éprouvées</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row mt-10 gap-3.5 md:justify-center xl:justify-start">
                <button className="flex border gap-2 items-center justify-center text-white p-3.5 rounded-2xl bg-blue-500 hover:bg-transparent hover:text-blue-500 border-blue-500 transition duration-500">
                  Voir nos prix 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                  </svg>
                </button>
                <button className="flex border gap-2 items-center justify-center text-black p-3.5 rounded-2xl bg-transparent hover:bg-transparent hover:text-blue-500 border-black hover:border-blue-500 transition duration-500">
                  Planifiez un appel stratégique gratuit 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className=" rounded-xl overflow-hidden relative">
              <Image src={"/h2.webp"} width={500} height={0} alt="" className="w-full absolute transform rotate-45"></Image>
              <Image src={"/h1.png"} width={500} height={0} alt="" className="w-full absolute transform rotate-45 mt-100 top-0"></Image>
            </div>
          </div>
          <div className=" mt-3.5 xl:mt-10 grid grid-cols-3 md:grid-cols-5 items-center justify-center">
              <div className="hidden md:flex h-30 w-30 rounded-full  items-center justify-center overflow-hidden">
                <Image src={'/symphoni_social_logo.jpg'} alt="" width={100} height={100}></Image>
              </div>
              <div className="hidden md:flex h-30 w-30 rounded-full items-center justify-center overflow-hidden">
                <Image src={'/zanini.jpg'} alt="" width={100} height={100}></Image>
              </div>
              <div className="h-30 w-30 rounded-full  flex items-center justify-center overflow-hidden">
                <Image src={'/skynesys_logo.jpg'} alt="" width={100} height={100}></Image>
              </div>
              <div className="h-30 w-30 rounded-full flex items-center justify-center overflow-hidden">
                <Image src={'/young ecolo.jpg'} alt="" width={100} height={100}></Image>
              </div>
              <div className="h-30 w-30 rounded-full  flex items-center justify-center overflow-hidden">
                <Image src={'/codec.png'} alt="" width={100} height={100}></Image>
              </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 xl:gap-5 mt-3.5 xl:mt-20">
            <div className=" border border-gray-200 rounded-xl p-10">
                <div className="text-center">
                  <h1 className="font-semibold text-5xl">+28</h1>
                  <p className="text-gray-500 ">Clients actifs dans nos packs.</p>
                </div>
            </div>
            <div className="border border-gray-200 rounded-xl p-10">
                <div className="text-center">
                  <h1 className="font-semibold text-5xl">+180</h1>
                  <p className="text-gray-500">Augmentation moyenne des ventes.</p>
                </div> 
            </div>
            <div className="border border-gray-200 rounded-xl p-10">
                <div className="text-center">
                  <h1 className="font-semibold text-5xl">97%</h1>
                  <p className="text-gray-500">Taux de satisfaction.</p>
                </div>
            </div>
            <div className="border border-gray-200 rounded-xl p-10">
                <div className="text-center">
                  <h1 className="font-semibold text-5xl">48Jrs</h1>
                  <p className="text-gray-500">Durée de livraison moyenne.</p>
                </div>
            </div>
          </div>
        </section>

        <section className="w-full xl:p-5 mt-5" id="portfolio">
          <div className="text-center">
            <h1 className="text-2xl xl:text-4xl text-black font-semibold">Notre portfolio</h1>
            <p className="text-gray-500">Découvrez nos derniers projets en identité visuelle et branding, où chaque marque e été pensée pour inspirer, se demarquer et évoluer.</p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-5">
            <div className="p-1 border border-gray-200 flex flex-wrap rounded-xl">
              <Image src={'/p1.avif'} width={1000} height={1000} className="h-full w-full" alt=""></Image>
            </div>
            <div className="p-1 border border-gray-200 flex flex-wrap gap-3.5 rounded-xl">
              <Image src={'/p2.webp'} width={1000} height={1000} className="h-full w-full" alt=""></Image>
            </div>
            <div className="p-1 border border-gray-200 flex flex-wrap gap-3.5 rounded-xl">
              <Image src={'/p-3.webp'} width={1000} height={1000} className="h-full w-full" alt=""></Image>
            </div>
            <div className="p-1 border border-gray-200 flex flex-wrap gap-3.5 rounded-xl">
              <Image src={'/p-4.webp'} width={1000} height={1000} className="h-full w-full" alt=""></Image>
            </div>
          </div>
        </section>

        <section className="w-full xl:p-5 mt-5" id="how-it-works">
          <div className="w-full text-center">
            <h1 className="text-2xl xl:text-4xl text-black font-semibold">Pourquoi votre e-commerce stagne</h1>
            <p className="text-gray-500">la plus part des e-commercant perde de l&apos;argent a cause de ses 4 problemes fondamentaux</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5.5 mt-10">
            <div className="border border-gray-200 rounded-xl h-fit overflow-hidden">
              <div className="h-65 bg-gray-200"></div>
              <div className="relative flex items-center justify-center mt-5 ">
                <div className="absolute h-30 w-30 rounded-full bg-white flex items-center justify-center">
                  <div className="rounded-full h-15 w-15 bg-black flex items-center justify-center">
                    <h1 className="text-2xl text-white">1</h1>
                  </div>
                </div>
              </div>
              <div className="text-center mt-10 p-10">
                <p className="text-2xl font-semibold">Boutique peu credible</p>
                <p>Votre site inspire mefiance et les visiteurs partent avant d'acheter. 70% des ventes se jouent sur la première impression.</p>
              </div>
            </div>
            <div className="border border-gray-200 rounded-xl h-fit overflow-hidden">
              <div className="h-65 bg-gray-200"></div>
              <div className="relative flex items-center justify-center mt-5 ">
                <div className="absolute h-30 w-30 rounded-full bg-white flex items-center justify-center">
                  <div className="rounded-full h-15 w-15 bg-black flex items-center justify-center">
                    <h1 className="text-2xl text-white">2</h1>
                  </div>
                </div>
              </div>
              <div className="text-center mt-10 p-10">
                <p className="text-2xl font-semibold">Publicités qui ne convertissent pas</p>
                <p>Vos pubs attirent des curieux pas des acheteurs. Resultat: budget gaspillé et cout d'acquisition trop élevé.</p>
              </div>
            </div>
            <div className="border border-gray-200 rounded-xl h-fit overflow-hidden">
              <div className="h-65 bg-gray-200"></div>
              <div className="relative flex items-center justify-center mt-5 ">
                <div className="absolute h-30 w-30 rounded-full bg-white flex items-center justify-center">
                  <div className="rounded-full h-15 w-15 bg-black flex items-center justify-center">
                    <h1 className="text-2xl text-white">3</h1>
                  </div>
                </div>
              </div>
              <div className="text-center mt-10 p-10">
                <p className="text-2xl font-semibold">Fiches produits qui ne vendent pas</p>
                <p>Des descriptions banales qui n'eveillent pas le desir d'achatet une visibilité Google inexistante.</p>
              </div>
            </div>
            <div className="border border-gray-200 rounded-xl h-fit overflow-hidden">
              <div className="h-65 bg-gray-200"></div>
              <div className="relative flex items-center justify-center mt-5 ">
                <div className="absolute h-30 w-30 rounded-full bg-white flex items-center justify-center">
                  <div className="rounded-full h-15 w-15 bg-black flex items-center justify-center">
                    <h1 className="text-2xl text-white">4</h1>
                  </div>
                </div>
              </div>
              <div className="text-center mt-10 p-10">
                <p className="text-2xl font-semibold">Présence digitale amateur</p>
                <p>Vos reseaux sociaux ne reflètent pas le professionalisme de votre marque et n'engagent pas votre audience.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full xl:p-5 mt-5" id="solutions">
          <div className="w-full text-center">
            <h1 className="text-2xl xl:text-4xl text-black font-semibold">Nos solutions qui transforment</h1>
            <p className="text-gray-500">Chaque service est conçu pour résoudre un problème spécifique et générer des résultats mesurables</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3.5 mt-10">
            <div className="h-100 rounded-xl border border-gray-200 p-5">
              <div className="text-center">
                <p className="text-2xl font-semibold">1.Création & Optimisation Shopify</p>
                <p className="mt-5">Une boutique claire, rapide et prête à vendre.Plus de crédibilité et de conversions dès la première visite. Transformation complète de votre image de marque.</p>
              </div>
            </div>
            <div className="h-100 rounded-xl border border-gray-200 p-5">
              <div className="text-center">
                <p className="text-2xl font-semibold">2.Création de visuels Publicitaires Performants</p>
                <p className="mt-5">Des contenus qui captent l'attention et stoppent le scroll.CTR plus élevé → baisse du coût par clic et plus de conversions. ROI publicitaire multiplié par 2.</p>
              </div>
            </div>
            <div className="h-100 rounded-xl border border-gray-200 p-5">
              <div className="text-center">
                <p className="text-2xl font-semibold">3.Fiches Produits Optimisées</p>
                <p className="mt-5">Des fiches qui donnent envie d'acheter et se classent sur Google.Plus de visibilité et taux de conversion plus élevé. Vos produits deviennent irrésistibles.</p>
              </div>
            </div>
            <div className="h-100 rounded-xl border border-gray-200 p-5">
              <div className="text-center">
                <p className="text-2xl font-semibold">4.Campagnes Publicitaires Rentables</p>
                <p className="mt-5">Des pubs optimisées pour attirer des acheteurs, pas des curieux.Plus de ventes, moins de budget gaspillé. Chaque euro investi génère 3€ de chiffre d'affaires.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full xl:p-10 mt-5  rounded-xl p-2.5" id="pricing">
          <div className="w-full text-center">
            <h1 className="xl:text-4xl text-2xl text-black font-semibold">Nos differents packs</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10 items-center justify-center text-black">
            <div className="h-200 bg-white rounded-xl border border-blue-500">
              <div className="p-10">
                <h1 className="font-semibold text-2xl">Stater</h1>
                <h1 className="font-semibold text-4xl mt-5">85000.FCFA </h1>
                <p className="text-gray-500 mt-3.5">Pour ceux qui débutent et veulent être crédibles sans se ruiner.</p>
                <div className="w-full  items-center justify-center mt-10">
                  <button className="w-full border border-blue-500 p-3.5 rounded-2xl text-blue-500 flex gap-2.5 items-center justify-center">
                    Order Now
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                  </button>
                </div>
              </div>
              <hr className="border-gray-200 mt-3.5 mb-3.5" />
              <div>
                <div className="flex items-center p-3.5 gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="oklch(62.3% 0.214 259.815)" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                  </svg>
                  <p>Logo + mini charte graphique</p>
                </div>
                <div className="flex items-center p-3.5 gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="oklch(62.3% 0.214 259.815)" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                  </svg>
                  <p>Création de la page pro Facebook/Instagram pro</p>
                </div>
                <div className="flex items-center p-3.5 gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="oklch(62.3% 0.214 259.815)" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                  </svg>
                  <p>6 visuels pour vos post (Video, carousel, flyers)</p>
                </div>
                <div className="flex items-center p-3.5 gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="oklch(62.3% 0.214 259.815)" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                  </svg>
                  <p>Creation de votre boutique shopify pro</p>
                </div>
                <div className="flex items-center p-3.5 gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="oklch(62.3% 0.214 259.815)" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                  </svg>
                  <p>Fichier de gestion et comptabilite personnalise</p>
                </div>
              </div>
            </div>
            <div className="pb-10 bg-white rounded-xl  overflow-hidden border border-blue-500">
              <div className="text-center bg-blue-500 p-3.5">
                <h1 className="text-white text-xl">Plus populaire</h1>
              </div>
              <div className="p-10">
                <h1 className="font-semibold text-2xl">Croissance</h1>
                <h1 className="font-semibold text-4xl mt-5">150000.FCFA  </h1>
                <p className="text-gray-500 mt-3.5">Pour ceux qui ont déjà une boutique ou des produits mais galèrent à vendre régulièrement.</p>
                <div className="w-full  items-center justify-center mt-10">
                  <button className="w-full bg-blue-500 p-3.5 rounded-2xl text-white flex gap-2.5 items-center justify-center">
                    Order Now
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                  </button>
                </div>
              </div>
              <hr className="border-gray-200 mt-3.5 mb-3.5" />
              <div>
                <div className="flex items-center p-2 gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="oklch(62.3% 0.214 259.815)" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                  </svg>
                  <p>Rebranding</p>
                </div>
                <div className="flex items-center p-2 gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="oklch(62.3% 0.214 259.815)" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                  </svg>
                  <p>Création de la page pro Facebook/Instagram pro</p>
                </div>
                <div className="flex items-center p-2 gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="oklch(62.3% 0.214 259.815)" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                  </svg>
                  <p>12 visuels pour vos post (Video, carousel, flyers)</p>
                </div>
                <div className="flex items-center p-2 gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="oklch(62.3% 0.214 259.815)" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                  </svg>
                  <p>Optimisation de la boutique shopify/Woocommerce</p>
                </div>
                <div className="flex items-center p-2 gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="oklch(62.3% 0.214 259.815)" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                  </svg>
                  <p>Reporting hebdomadaire sur tes pubs</p>
                </div>
                <div className="flex items-center p-2 gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="oklch(62.3% 0.214 259.815)" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                  </svg>
                  <p>Fichier de gestion et comptabilite personnalise</p>
                </div>
                <div className="flex items-center p-2 gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="oklch(62.3% 0.214 259.815)" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                  </svg>
                  <p>Gestion de la page (animation et reponse)</p>
                </div>
                <div className="flex items-center p-2 gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="oklch(62.3% 0.214 259.815)" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                  </svg>
                  <p>Creation et pilotage des campagnes publicitaires</p>
                </div>
                <div className="flex items-center p-2 gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="oklch(62.3% 0.214 259.815)" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                  </svg>
                  <p>10 fiches produits pour vos boutiques </p>
                </div>
                <div className="flex items-center p-2 gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="oklch(62.3% 0.214 259.815)" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                  </svg>
                  <p>Mise en place d&apos;un chatbot Messenger/WhatsApp</p>
                </div>
              </div>
            </div>
            <div className="hidden xl:block bg-white rounded-xl  opacity-50 blur-lg">
              <div className="p-10">
                <h1 className="font-semibold text-2xl">Premium</h1>
                <h1 className="font-semibold text-4xl mt-5">280000.FCFA </h1>
                <p className="text-gray-500 mt-3.5">Pour ceux qui veulent scaler sérieusement et bâtir une marque forte.</p>
                <div className="w-full  items-center justify-center mt-10">
                  <button className="w-full border border-blue-500 p-3.5 rounded-2xl text-blue-500 flex gap-2.5 items-center justify-center">
                    Order Now
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                  </button>
                </div>
              </div>
              <hr className="border-gray-200 mt-3.5 mb-3.5" />
              <div>
                <div className="flex items-center p-3.5 gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="oklch(62.3% 0.214 259.815)" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                  </svg>
                  <p>Logo + mini charte graphique</p>
                </div>
                <div className="flex items-center p-3.5 gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="oklch(62.3% 0.214 259.815)" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                  </svg>
                  <p>Création de la page pro Facebook/Instagram pro</p>
                </div>
                <div className="flex items-center p-3.5 gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="oklch(62.3% 0.214 259.815)" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                  </svg>
                  <p>6 visuels pour vos post (Video, carousel, flyers)</p>
                </div>
                <div className="flex items-center p-3.5 gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="oklch(62.3% 0.214 259.815)" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                  </svg>
                  <p>Creation de votre boutique shopify pro</p>
                </div>
                <div className="flex items-center p-3.5 gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="oklch(62.3% 0.214 259.815)" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                  </svg>
                  <p>Fichier de gestion et comptabilite personnalise</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="flex w-full items-center justify-center">
              <button className="w-2/3 xl:w-1/2 border flex items-center justify-center gap-3.5 hover:text-white hover:bg-blue-500 transition duration-1000 border-blue-500 bg-traparent text-blue-500 p-3.5 text-center rounded-full mt-10">
                Book Call
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
              </button>
            </div>
            <div className="text-gray-500 text-center mt-20">
              <h1 className="text-black font-semibold text-2xl">Garantie de satisfaction 100% sans risque</h1>
              <p className="mt-3.5">Nous nous engageons pour votre réussite. Si vous n'êtes pas entièrement satisfait de Notre</p>
              <p>accompagnement, nous continuerons à travailler jusqu&apos;à ce que vous le soyez, ou nous vous fournirons un remboursement complet.</p>
            </div>
          </div>
          <hr  className="border border-gray-200 mt-10"/>
        </section>

        <section className="w-full xl:p-5 mt-5" id="why-work-with-us">
          <div className="w-full text-center">
            <h1 className="text-2xl xl:text-4xl text-black font-semibold">Pourquoi faire un branding professionel</h1>
            <h1 className="text-2xl xl:text-4xl text-black font-semibold">avec Axe digital?</h1>
          </div>
          <div className="w-full flex items-center justify-center mt-10">
            <div className="w-full xl:w-4/5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3.5">
              <div className="rounded-xl bg-gradient-to-b  from-red-100 via-white to-white  p-5 border border-red-100 pb-20">
                <h1 className="text-2xl font-semibold">Avec l'IA</h1>
                <div className="mt-10">
                  <div className="flex items-start gap-2.5 mt-3.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="oklch(70.4% 0.191 22.216)" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                    </svg>
                    <p>Résultats génériques et peu personnalisés.</p>
                  </div>
                  <div className="flex items-start gap-2.5 mt-3.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="oklch(70.4% 0.191 22.216)" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                    </svg>
                    <p>Pas de stratégie ni accompagnement humain.</p>
                  </div>
                  <div className="flex items-start gap-2.5 mt-3.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="oklch(70.4% 0.191 22.216)" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                    </svg>
                    <p>Aucune garantie de performance ou de suivi.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-gradient-to-b  from-red-100 via-white to-white  p-5 border border-red-100 pb-20">
                <h1 className="text-2xl font-semibold">Avec un freelance ou une agence classique</h1>
                <div className="mt-10">
                  <div className="flex items-start gap-2.5 mt-3.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="oklch(70.4% 0.191 22.216)" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                    </svg>
                    <p>Délais parfois longs et imprévisibles.</p>
                  </div>
                  <div className="flex  gap-2.5 mt-3.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="oklch(70.4% 0.191 22.216)" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                    </svg>
                    <p>Coûts élevés sans forcément un vrai retour sur investissement.</p>
                  </div>
                  <div className="flex items-start gap-2.5 mt-3.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="oklch(70.4% 0.191 22.216)" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                    </svg>
                    <p>Peu ou pas de suivi après la livraison.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-gradient-to-b  from-blue-100 via-white to-white  p-5 border border-blue-100 pb-20">
                <h1 className="text-2xl font-semibold">Avec notre startup</h1>
                <div className="mt-10">
                  <div className="flex items-start gap-2.5 mt-3.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="oklch(70.7% 0.165 254.624)" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                    <p>Délais parfois longs et imprévisibles.</p>
                  </div>
                  <div className="flex items-start gap-2.5 mt-3.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="oklch(70.7% 0.165 254.624)" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                    <p>Coûts élevés sans forcément un vrai retour sur investissement.</p>
                  </div>
                  <div className="flex items-start gap-2.5 mt-3.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="oklch(70.7% 0.165 254.624)" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                    <p>Peu ou pas de suivi après la livraison.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 flex justify-center">
            <button className="p-3.5 gap-3.5 transition duration-1000 rounded-full flex items-center border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
              voir nos packages
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
              </svg>
            </button>
          </div>
        </section>

        <section className="w-full xl:p-5 mt-5" id="testimonial">
          <div className="text-center text-black">
            <h1 className="text-2xl xl:text-4xl font-semibold">Testimonials</h1>
          </div>
          {/* <div className="md:pr-20 md:pl-20">
            <div className="grid grid-cols-1 xl:grid-cols-2 mt-3.5 border border-gray-200 rounded-xl overflow-hidden">
              <div className="h-100">

              </div>
              <div className="flex justify-end h-100 overflow-hidden">
                <Image src={'/richkard.png'} alt="richkart"  width={300} height={300} className="scale-130"></Image>
              </div>
            </div>
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3.5 mt-3.5">
            <div className="border border-gray-200 rounded-xl p-3.5">
              <div className="flex gap-3.5 items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <Image src={'/zanini.jpg'} alt="" width={100} height={100}></Image>
                </div>
                <p className="text-black">Zanini</p>
              </div>
              <div className="flex mt-3.5 gap-2 items-center text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <p className="ml-3.5 text-gray-300">5/5</p>
              </div>
              <div className="text-black">
                <p>Avant de travailler avec Axe digital, mon site e-commerce avait du mal à générer des ventes régulières. Grâce à leur accompagnement personnalisé, j&apos;ai enfin trouvé une stratégie claire et mes revenus ont doublé en moins de 3 mois</p>
              </div>

            </div>
            <div className="border border-gray-200 rounded-xl p-3.5">
              <div className="flex gap-3.5 items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <p className="text-4xl text-white">S</p>
                </div>
                <p className="text-black">stream Area</p>
              </div>
              <div className="flex mt-3.5 gap-2 items-center text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <p className="ml-3.5 text-gray-300">5/5</p>
              </div>
              <div className="text-black">
                <p>Ce que j&apos;ai le plus apprécié, c&apos;est leur approche humaine. Ils ne se contentent pas de donner des conseils génériques, ils prennent vraiment le temps de comprendre nos besoins et de construire une solution adaptée. Aujourd&apos;hui, je gère mon e-commerce avec beaucoup plus de confiance.</p>
              </div>

            </div>
            <div className="border border-gray-200 rounded-xl p-3.5">
              <div className="flex gap-3.5 items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <p className="text-4xl text-white">M</p>
                </div>
                <p className="text-black">mapa sarl</p>
              </div>
              <div className="flex mt-3.5 gap-2 items-center text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <p className="ml-3.5 text-gray-300">5/5</p>
              </div>
              <div className="text-black">
                <p>J&apos;avais déjà essayé plusieurs formations en ligne, mais rien n&apos;était concret. Avec axe digital, j&apos;ai eu un vrai suivi et des résultats mesurables. Mon taux de conversion a augmenté de 40% !</p>
              </div>

            </div>
            <div className="border border-gray-200 rounded-xl p-3.5">
              <div className="flex gap-3.5 items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <Image src={'/skynesys_logo.jpg'} alt="" width={100} height={100}></Image>
                </div>
                <p className="text-black">skynesis</p>
              </div>
              <div className="flex mt-3.5 gap-2 items-center text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <p className="ml-3.5 text-gray-300">5/5</p>
              </div>
              <div className="text-black">
                <p>Leur expertise dans le domaine du marketing digital m&apos;a permis d&apos;éviter de nombreuses erreurs coûteuses. Aujourd&apos;hui, ma boutique en ligne est bien positionnée et attire des clients de manière constante.</p>
              </div>

            </div>
            <div className="border border-gray-200 rounded-xl p-3.5">
              <div className="flex gap-3.5 items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <Image src={'/symphoni_social_logo.jpg'} alt="" width={100} height={100}></Image>
                </div>
                <p className="text-black">symphoni social</p>
              </div>
              <div className="flex mt-3.5 gap-2 items-center text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <p className="ml-3.5 text-gray-300">5/5</p>
              </div>
              <div className="text-black">
                <p>Ce que j&apos;ai aimé, c&apos;est leur disponibilité et leur réactivité. À chaque fois que j&apos;avais une difficulté technique ou stratégique, ils étaient là pour me guider. C&apos;est plus qu&apos;un accompagnement, c&apos;est un vrai partenariat.</p>
              </div>

            </div>
            <div className="border border-gray-200 rounded-xl p-3.5">
              <div className="flex gap-3.5 items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <p className="text-4xl text-white">L</p>
                </div>
                <p className="text-black">la grande royale</p>
              </div>
              <div className="flex mt-3.5 gap-2 items-center text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <p className="ml-3.5 text-gray-300">5/5</p>
              </div>
              <div className="text-black">
                <p>Je recommande vivement axe digial à tous ceux qui veulent se lancer dans l&apos;e-commerce. Leur accompagnement pas à pas m&apos;a permis de passer de l&apos;idée à une boutique rentable, sans me sentir perdu.</p>
              </div>

            </div>
          </div>
          
        </section>

        <section className="w-full xl:p-5 mt-5" id="faq">
          <div className="grid cols-1 xl:grid-cols-2 gap-20">
            <div>
              <h1 className="text-2xl xl:text-4xl font-semibold">Questions</h1>
              <h1 className="text-2xl xl:text-4xl font-semibold">fréquemment posées</h1>
              <div className="mt-5 border border-gray-200 p-5 rounded-xl">
                <div className="flex w-full items-center justify-center">
                  <Image src={'https://cdn.prod.website-files.com/66f8845b6f7911f99d856648/66f8845b6f7911f99d8566d5_Icon%20Container.svg'} width={60} height={60} alt=""></Image>
                </div>
                <p className="text-center mt-3.5">Besoin de plus d'aide</p>
                <p>Si vous ne trouvez pas la réponse que vous cherchez, veuillez nous contacter en cliquant sur le bouton ci-dessous.</p>
                <div className="flex w-full items-center justify-center">
                  <button className="flex items-center gap-2 bg-blue-900 rounded-full p-3.5 mt-3.5 text-white">
                    nous contacter
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>En quoi consiste votre accompagnement pour e-commerçants ?</AccordionTrigger>
                  <AccordionContent>
                    Nous proposons un suivi personnalisé allant de la création de la boutique en ligne à l&apos;optimisation des ventes (marketing, gestion des stocks, automatisation, publicité, etc.).
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>À qui s&apos;adresse votre service ?</AccordionTrigger>
                  <AccordionContent>
                    À tous ceux qui souhaitent lancer ou développer un e-commerce, que vous soyez débutant(e) ou déjà propriétaire d&apos;une boutique en ligne.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Dois-je déjà avoir un site e-commerce pour travailler avec vous ?</AccordionTrigger>
                  <AccordionContent>
                    Pas forcément ! Nous vous aidons aussi bien à créer votre première boutique qu&apos;à améliorer un site déjà existant.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Quels résultats puis-je attendre ?</AccordionTrigger>
                  <AccordionContent>
                    Chaque projet est unique, mais la plupart de nos clients constatent une nette amélioration de leurs ventes et de leur visibilité dès les premiers mois d&apos;accompagnement.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Combien de temps dure l&apos;accompagnement ?</AccordionTrigger>
                  <AccordionContent>
                    Nous proposons des formules flexibles : du suivi ponctuel (quelques semaines) à des programmes complets sur plusieurs mois, selon vos besoins et vos objectifs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Quels sont vos tarifs ?</AccordionTrigger>
                  <AccordionContent>
                    Nos tarifs varient selon le type d&apos;accompagnement choisi. Nous proposons des offres adaptées à chaque budget, du lancement de projet aux stratégies avancées pour booster les ventes.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <hr  className="border border-gray-200 mt-10"/>
      </main>
      <Footer></Footer>
    </div>
  );
}
