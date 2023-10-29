import "./Home.css";
import Nav from "../../components/MainNav/MainNav";
import {useTheme}  from "../../themeContext";
import AutoTyping from '../../components/AutoTyping/AutoTyping';
import Form from "../../components/Form/Form";
import Price from "../../components/Price/Price";
import Slide from "../../components/AchieveMentSlide/AchieveMentSlide";
import Service  from "../../components/Cards/ServiceCards/ServiceCards";
import Headers from "../../components/Headers/Headers";
import Equipments from "../../components/Equipments/Equipments";
import Features from "../../components/Cards/FeatursCards/FeatursCards";
import Footer from "../../components/Footer/Footer";

//ICONS
import AdUnitsRoundedIcon from '@mui/icons-material/AdUnitsRounded';
import ReorderRoundedIcon from '@mui/icons-material/ReorderRounded';
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import OilBarrelOutlinedIcon from '@mui/icons-material/OilBarrelOutlined';
import PestControlOutlinedIcon from '@mui/icons-material/PestControlOutlined';
import ElectricMeterOutlinedIcon from '@mui/icons-material/ElectricMeterOutlined';
import PlumbingOutlinedIcon from '@mui/icons-material/PlumbingOutlined';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';


import mobile from "../../images/imageInUse/mobile.png"
import HomeButton from "../../components/HomeButton/HomeButton";

export default function Home() {
  const darkTheme =useTheme()
  const text ="Professional cleaning maintaince cleaning service in Nigeria";



  /*
  THEMES
  */

  const HomePageTheme={
    backgroundColor:darkTheme?'black':"white",
    color:darkTheme?'black':"black",
  }


  const FooterTheme={
    backgroundColor:darkTheme?'black':"#214c3b",
    color:darkTheme?'black':"white",
  }

  const serviceDescrption=[{type:"CLEANING",description:"Whether you need a deep cleaning or routine maintenance cleaning service for your home, office, factory etc, discover the difference trained workers, a simple and effective quality program, and professional management can make when you hire us. Our edge lies in our wealth of experience gathered over the years in managing high profile cleaning jobs and delivering the desired outcomes.",icon:CleaningServicesOutlinedIcon,delay:500},
                            {type:"FPSO, TANKS AND VESSEL DESLUDGING",description:"In 2020, we secured partnerships and accreditations including the DPR permit to enable us provide fast, efficient and safe desludging and cleaning services for FPSO using automated cleaning system with High Pressure Jetting and Vacuum Transfer System capable of water jetting and cleaning of the interior surfaces, and evacuating sludge from a depth of over 50meters in FPSO.",icon:OilBarrelOutlinedIcon,delay:600},
                            {type:"FUMIGATION/PEST CONTROL",description:"With the most modern innovations in pest control and the use of approved products, we provide the most effective pest control services to our clients. Our staff attend certified pest control trainings to remain informed. Over the years we have consistently provided pest control services to multi-nationals, world organizations, government and private establishments, estates and individuals.",icon:PestControlOutlinedIcon,delay:700},
                            {type:"ELECTRICAL & AIR CONDITIONING (AC)",description:"Whether for your home, office, factory, estate etc, we offer routine check-ups and repairs of the air conditioning and electrical systems in residential and commercial building through testing, monitoring, fixing, and replacing elements of the system. We also provide installations, wiring, general assessment and consultancy. We offer this as an instant, on call, routine and subscription based service.",icon:ElectricMeterOutlinedIcon,delay:800},
                            {type:"PLUMBING",description:"We offer installation, inspection, replacement and repair of plumbing fixtures. Do you need a scheduled maintenance, on call, or routine onsite inspection and repairs? We are your most preferred choice. We bear no misgivings about delivering your most desired outcomes.",icon:PlumbingOutlinedIcon,delay:900},
                            {type:"HORTICULTURE (GARDENING)",description:"Landscaping and garden maintenance services just got redefined with our bespoke services. With a good understanding of your environment, aesthetics and your needs, we deliver planting, scheduled, on call, and routine landscaping and garden maintenance services  .",icon:GrassOutlinedIcon,delay:1000}]
  
  const featureDescrption=[{type:"Request for services with ease",description:"Do you want to request for an instant service or a service that will be carried out over a period of time (Subscription service)? Do that with ease with just a few clicks on your mobile device and get a free quote instantly!",icon:ReorderRoundedIcon,delay:500},
                            {type:"Track your jobs on the go, TANKS AND VESSEL DESLUDGING",description:"You are not constrained by space and distance! No matter where you are, you can keep track of all ongoing jobs and projects on your many facilities at the same time. So even when you are far away, your facility can be so close to you.",icon:AdUnitsRoundedIcon,delay:600},
                            {type:"Get reports and send feedbacks",description:"You can receive reports in real time from our staff and offer responses and feedbacks on the go through our in-app chat feature. These reports include texts, pictures and videos.",icon:AssessmentRoundedIcon,delay:700},
                            {type:"Make payments with ease",description:"Our wallet system allows you to fund your wallet and pay for services from your wallet with ease. You can enjoy up to 10% discount when you pay from your wallet so why not fund your wallet today.",icon:AccountBalanceWalletRoundedIcon,delay:800},
                            {type:"Earn more as your refer",description:"You do not have limits to the amount you can earn when you refer. Earn up to 15% of the total project amount when you refer. You can instantly withraw your earnings to your bank account or convert it to your wallet balance to make payment for services.",icon:ConnectWithoutContactRoundedIcon,delay:900},
                            {type:"Guarantee your security",description:"With our platform and everything we have put in place for your security and that of your valuables, you can be rest assured! Our platform allows you to meet, keep tabs and view the background information of the staff that have been assigned to your project. You can also assign supervisors to monitor your projects on the go.",icon:VpnKeyRoundedIcon,delay:1000}]


  const NavlinksLogin=[{x:0,data:"Home",data2:"SelectedLink2  active2",data3:0,delay:0,data4:"#homeContainer",data5:"inpage"},
                        {x:0,data:"Gallery",data2:"SelectedLink2",data3:1,delay:0,data4:"/Home/Gallery",data5:""},
                        {x:0,data:"Dashboard",data2:"SelectedLink2",data3:2,delay:0,data4:"/Home/Dashboard",data5:""},
                        {x:0,data:"Contact",data2:"SelectedLink2",data3:3,delay:0,data4:"#section7",data5:"inpage"}]

                        
  const NavlinksNotLogin=[{x:0,data:"Home",data2:"SelectedLink2  active2",data3:0,delay:100,data4:"#homeContainer",data5:"inpage"},
                        {x:0,data:"Service",data2:"SelectedLink2",data3:1,delay:200,data4:"#section4",data5:"inpage"},
                        {x:0,data:"Gallery",data2:"SelectedLink2",data3:2,delay:300,data4:"/Home/Gallery",data5:""},
                        {x:0,data:"Contact",data2:"SelectedLink2",data3:3,delay:400,data4:"#section7",data5:"inpage"}]

  
  





  return (
    <div className="Home" style={HomePageTheme} id="homeContainer" >
  
    <div className="section-wrap">
        
      <Nav NavlinksLoginP={NavlinksLogin}  NavlinksNotLoginP={NavlinksNotLogin}/>
      <section id="section1">
        <ul>
          <li>
            <div id="Heading">

                <h3 id="HeadingContent" > 

                  <AutoTyping textP={text}/> 
                 
                </h3>
            </div>
            <div id="paragraph">
                <p>While you are busy with your  
                  bussiness we would be busy<br/> 
                  putting your place in order<br/> 
                </p>
            </div>

        
            <HomeButton/>
            <Price/>

          </li>
          <li>
              <Form typeP="instant"  ExHeightP2={"910px"}  ExHeightP={"620px"} heightP={"310px"} titleP="instant service request" buttonTypeP="Request a qoute"/>
          </li>
        </ul>

      </section>
      
    </div>

    <section id="section2">
      <Slide/>
    </section>

    <section id="section3">
    <div className="overLay"></div>
      <ul>
        <li>
          <h3>
            Entrust  us with your home  today And <br/>
            Track your services via our web App
          </h3>
          <a href="/#">
            Features
          </a>

          <div></div>
        </li>
        <li>
          <img src={mobile} alt="app sample"/>
        </li>
      </ul>
      
    </section>
    <section id="section4">
      <Headers titleP="We Are a Leading Cleaning Company in Nigeria." pagraphP="We understand that the greatest ‘nightmare’ of facility owners are issues relating to facility management. We therefore lift off the burden of these ‘distractions’ so as to improve quality of life and the productivity of our clients who now concentrate on the core of their business and concerns." pagraphP2="We deliver your most desired facility management outcomes made possible through our experience over the years by paying attention to details, professionalism and constant training"/>
      <div className="services"> 
        <Service serviceDescrptionP={serviceDescrption}/>
      </div>
    </section>
    <section id="section5">
      <h2> 
        Our Professional  Equipment 
      </h2>
      <Equipments/>
    </section>
    <section id="section6">
      <h2>
        FEATURES
      </h2>
      <p> 
      what makes us stand out
      </p>
      <div>
          <Features featureDescrptionP={featureDescrption}/>
      </div>
    </section>
    <section id="section7" style={FooterTheme}>
        <Footer/>
    </section>

    

    </div>
  )
}

