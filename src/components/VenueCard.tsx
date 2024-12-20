interface VenueCardProps {
  venue: {
    title: string;
    description: string;
    location: string;
    assistants: number;
    m2: number;
    icon: string;
    public: string;
  };
}

export default function VenueCard({ venue }: VenueCardProps) {
  return (
    <div className="bg overflow-hidden flex pt-8 justify-center gap-4 p-4">
      {/* First Subcard: Image of the venue */}

      <div
        className="relative h-80 w-96"
        style={{
          backgroundImage: `url(/w.png?height=228&width=256)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "0.75rem",
          overflow: "hidden",
        }}
      >
        <p className="text-lg p-4 font-medium text-white">{venue.location}</p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Second Subcard: Number of attendees and title/description */}
        <div className="flex bg-amber-950 p-6 rounded-xl flex-col justify-between h-full">
          <div className="flex flex-col items-centers">
            <div className="flex items-center">
              <div>
                <p className="text-7xl font-bold text-left">
                  {venue.assistants.toLocaleString()}
                </p>
                <p className="text-sm text-right">
                  {venue.public} {venue.icon}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Third Subcard: Location name */}
        <div className="text-center bg-amber-700 p-6 h-40 rounded-xl ">
          <div className="mt-auto text-right">
            <p className="text-2xl font-medium mb-1 text-left">{venue.title}</p>
            <p className="text-sm ">{venue.description}</p>
            <p className="text-2xl mt-6 italic">{venue.m2} m2</p>
          </div>
        </div>
      </div>
    </div>
  );
}
