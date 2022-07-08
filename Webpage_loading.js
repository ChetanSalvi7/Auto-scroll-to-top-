 //import file like this 
 
 
 const Home  = lazy(()=>import('./Compo/main page/Home.jsx')); 
const Navbar = lazy(()=>import('./Compo/Navbar/Navbar')); 
const Onboarding = lazy(()=>import('./Compo/Onboard/Onboarding')); 
const OurServices = lazy(()=>import('./Compo/OurServicesFullPage/OurServices')); 
const OurPartners = lazy(()=>import('./Compo/Partner/OurPartners')); 
const PreciousMetals = lazy(()=>import('./Compo/Precious metals/PreciousMetals')); 
const SafeDepositBox = lazy(()=>import('./Compo/Safe box/SafeDepositBox')); 
const SideMenu = lazy(()=>import('./Compo/Social side menu/SideMenu')); 
 
 app me 
 <Suspense fallback={
          <div className="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>}>
          
          
          All component
          
          </Suspense>
          
          auto loding animation
