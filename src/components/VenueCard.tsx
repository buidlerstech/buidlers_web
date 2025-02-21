import { memo, useMemo } from "react";
import { Venue } from '@/types/venue';

const VenueCard = memo(({
  title,
  description,
  location,
  assistants,
  m2,
  icon,
  public: audience
}: Venue) => {
  const imageUrl = useMemo(() => 
    `/w.png?height=228&width=256`, 
    []
  );

  return (
    <div className="bg overflow-hidden flex pt-8 justify-center gap-4 p-4">
      {/* First Subcard: Image of the venue */}
      <div
        className="relative h-80 w-96 rounded-xl overflow-hidden"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="text-lg p-4 font-medium text-white">{location}</p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Second Subcard: Number of attendees and title/description */}
        <div className="flex bg-amber-950 p-6 rounded-xl flex-col justify-between h-full">
          <div className="flex flex-col items-centers">
            <div className="flex items-center">
              <div>
                <p className="text-7xl font-bold text-left">
                  {assistants.toLocaleString()}
                </p>
                <p className="text-sm text-right">
                  {audience} {icon}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Third Subcard: Location name */}
        <div className="text-center bg-amber-700 p-6 h-40 rounded-xl">
          <div className="mt-auto text-right">
            <p className="text-2xl font-medium mb-1 text-left">{title}</p>
            <p className="text-sm">{description}</p>
            <p className="text-2xl mt-6 italic">{m2} m2</p>
          </div>
        </div>
      </div>
    </div>
  );
});

VenueCard.displayName = 'VenueCard';

export default VenueCard;
