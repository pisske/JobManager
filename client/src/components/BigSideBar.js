import Wrapper from "../assets/wrappers/BigSidebar";
import { useAppContext } from "../context/appContext";
import NavLinks from "./NavLinks";
import Logo from "../components/Logo";

const BigSideBar = () => {
  const { showSidebar, toggleSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSideBar;
