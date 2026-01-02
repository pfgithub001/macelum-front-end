import OctogonBackground from "@/app/components/octogon_background";

export default function Construction() {
  return ( 
    <section className="
    section 
    construction 
    relative
    h-screen
    flex
    flex-col
    justify-center
    items-center
    text-center
    text-white
    ">
        <OctogonBackground mapSrc="" opacity="0.5" /> 
        <img src="images/logo.png" alt="" className="
        md:w-125
        max-w-[90%]
        "/>
        <h1>Página en construcción.</h1>
    </section>
  );
}