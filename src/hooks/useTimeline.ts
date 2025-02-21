import { useState, useEffect, useMemo } from 'react';
import { Venue } from '@/types/venue';
import { venues, getYears } from '@/config/venues';

export const useTimeline = () => {
  const years = getYears();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRewinding, setIsRewinding] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = isRewinding 
          ? prevIndex === 0 ? (setIsRewinding(false), 1) : prevIndex - 1
          : prevIndex === years.length - 1 ? (setIsRewinding(true), prevIndex - 1) : prevIndex + 1;
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [isRewinding, years.length]);

  const selectedYear = years[currentIndex];
  
  const filteredVenues = useMemo(() => {
    return venues.filter(venue => venue.year === selectedYear);
  }, [selectedYear]);

  return {
    venues: filteredVenues,
    years,
    selectedYear,
    setSelectedYear: (year: number) => {
      const index = years.indexOf(year);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    },
    isRewinding,
  };
}; 