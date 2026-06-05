// Reservations Page
import Reservations from '../components/Reservations';
import OpeningHours from '../components/OpeningHours';
import FAQ from '../components/FAQ';
import SpecialOccasions from '../components/SpecialOccasions';

const ReservationsPage = () => {
  return (
    <>
      <Reservations />
      <SpecialOccasions />
      <FAQ />
      <OpeningHours />
    </>
  );
};

export default ReservationsPage;
