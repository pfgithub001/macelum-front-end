export interface backgroundScreenVideoProps {
  mapSrc: string;
  opacity: string;
}

export default function OctogonBackground( { mapSrc, opacity }: backgroundScreenVideoProps) {
  return ( 
    <div
      className="
        octogon_background
        absolute
        top-0
        left-0
        z-[-5]
        w-full
        overflow-y-hidden
        h-full
        flex
        justify-center
        ">
        <img src="images/octogon.png" alt="Macelum Octogon" className="
        h-300
        w-auto
        object-contain
        shrink-0
        -translate-y-25 md:-translate-y-12.5 lg:translate-y-0
        md:py-12.5 
        my-auto
        "/>
    </div>
  );
}