import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import Accueil from "../Accueil";
import Services from "../Services";
import Projets from "../Projets";
import Chatbot from "../Chatbot";
export default function Home() {
  return (
    <>
       <Accueil />
       <AboutMe />
       <Services />
        <Projets />
      <Chatbot/>
       <ContactMe />
    
      <Footer />
    </>
  );
}
