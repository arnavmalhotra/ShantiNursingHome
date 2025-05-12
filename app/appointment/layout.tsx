import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Book Appointment - Shanti Nursing Home, Saharanpur",
  description: "Schedule your appointment with Dr. Vinita Malhotra at Shanti Nursing Home in Saharanpur. Fill out the form to request your preferred date and time.",
  openGraph: {
    title: "Book Appointment - Shanti Nursing Home",
    description: "Easily book your gynecology or obstetrics appointment online.",
  },
};

export default function AppointmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 