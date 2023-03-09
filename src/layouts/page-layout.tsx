import ScrollToTop from "components/scroll-top-top";
import { Footer } from "components/footer";
import { Header } from "components/header";
import { TopNavigation } from "components/top-navigation";
import { Outlet } from "react-router-dom";

export const PageLayout = () => {
    return (
      <>
        <ScrollToTop />
        <Header />
        <TopNavigation />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    );
  }