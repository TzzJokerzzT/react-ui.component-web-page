import { FadeContainer } from "@/components/AnimatedContainer";
import { AnimationPage } from "@/components/Animation";
import { PortalTest } from "@/components/PortalTest";
import { StateTestComponent } from "@/components/StateTestComponent";
import AccordionPage from "@/pages/AccordionPage";
import AnimatedContainersPage from "@/pages/AnimatedContainersPage";
import AutocompletePage from "@/pages/AutocompletePage";
import AvatarPage from "@/pages/AvatarPage";
import BadgePage from "@/pages/BadgePage";
import BreadcrumbPage from "@/pages/BreadcrumbPage";
import ButtonPage from "@/pages/ButtonPage";
import CardPage from "@/pages/CardPage";
import CheckboxPage from "@/pages/CheckboxPage";
import ChipPage from "@/pages/ChipPage";
import { CodePage } from "@/pages/CodePage";
import ImagePage from "@/pages/ImagePage";
import { InputPage } from "@/pages/InputPage";
import ModalPage from "@/pages/ModalPage";
import NavbarPage from "@/pages/NavbarPage";
import PaginationPage from "@/pages/PaginationPage";
import ProgressSpinnerPage from "@/pages/ProgressSpinnerPage";
import RouterPage from "@/pages/RouterPage";
import SidebarPage from "@/pages/SidebarPage";
import SpinnerPage from "@/pages/SpinnerPage";
import { SwitchPage } from "@/pages/SwitchPage";
import TablePage from "@/pages/TablePage";
import TextAnimationPage from "@/pages/TextAnimationPage";
import ToastPage from "@/pages/ToastPage";
import TooltipPage from "@/pages/TooltipPage";
import UniformAnimationTest from "@/pages/UniformAnimationTest";
import { UserPage } from "@/pages/UserPage";
import { Routes, Route } from "react-router";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ButtonPage />} />
      <Route path="/cards" element={<CardPage />} />
      <Route path="/toasts" element={<ToastPage />} />
      <Route path="/tables" element={<TablePage />} />
      <Route path="/images" element={<ImagePage />} />
      <Route path="/checkboxes" element={<CheckboxPage />} />
      <Route path="/animations" element={<AnimationPage />} />
      <Route path="/text-animations" element={<TextAnimationPage />} />
      <Route path="/animated-containers" element={<AnimatedContainersPage />} />
      <Route path="/breadcrumbs" element={<BreadcrumbPage />} />
      <Route path="/spinners" element={<SpinnerPage />} />
      <Route path="/tooltips" element={<TooltipPage />} />
      <Route path="/pagination" element={<PaginationPage />} />
      <Route path="/accordions" element={<AccordionPage />} />
      <Route path="/avatars" element={<AvatarPage />} />
      <Route path="/autocomplete" element={<AutocompletePage />} />
      <Route path="/badges" element={<BadgePage />} />
      <Route path="/chips" element={<ChipPage />} />
      <Route path="/code" element={<CodePage />} />
      <Route path="/progress" element={<ProgressSpinnerPage />} />
      <Route path="/navbar" element={<NavbarPage />} />
      <Route path="/modal" element={<ModalPage />} />
      <Route path="/switches" element={<SwitchPage />} />
      <Route path="/users" element={<UserPage />} />
      <Route path="/inputs" element={<InputPage />} />
      <Route path="/sidebar" element={<SidebarPage />} />
      <Route path="/router" element={<RouterPage />} />
      <Route path="/state-test" element={<StateTestComponent />} />
      <Route path="/portal-test" element={<PortalTest />} />
      <Route path="/test-uniform" element={<UniformAnimationTest />} />
    </Routes>
  );
};

export default AppRoutes;
