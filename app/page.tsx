import AnnouncementBar from "./components/announcement-bar";
import CheckoutForm from "./components/checkout-form";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <CheckoutForm />
      <SiteFooter />
    </>
  );
}
