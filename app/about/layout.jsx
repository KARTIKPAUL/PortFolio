import Footer from "@/components/Footer";

export const metadata = {
  title: "Kartik | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
