import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Team from "./pages/Team";
import CoursePage from "./pages/Course";
import AICourse from "./pages/AICourse";
import ViralHooks from "./pages/ViralHooks";
import ContentCalendar from "./pages/ContentCalendar";
import ResourcesHub from "./pages/ResourcesHub";
import ResourceArticlePage from "./pages/ResourceArticle";

function AppRoutes() {
  return (
    <Switch>
      {/* ── Main pages ──────────────────────────────────────────────── */}
      <Route path="/" component={Home} />
      <Route path="/team" component={Team} />

      {/* ── Courses ─────────────────────────────────────────────────── */}
      <Route path="/course/basic-filming">
        {() => <CoursePage onOpenModal={() => {}} />}
      </Route>
      <Route path="/course/ai-gym-marketing">
        {() => <AICourse onOpenModal={() => {}} />}
      </Route>

      {/* ── Resources hub ───────────────────────────────────────────── */}
      <Route path="/resources" component={ResourcesHub} />

      {/* ── Interactive resource tools (existing pages) ──────────────── */}
      <Route path="/resources/viral-hooks" component={ViralHooks} />
      <Route path="/resources/content-calendar" component={ContentCalendar} />

      {/* ── Article resource pages (dynamic via slug) ───────────────── */}
      <Route path="/resources/educational-content-converts">
        {() => <ResourceArticlePage slug="educational-content-converts" />}
      </Route>
      <Route path="/resources/7-second-hook-formula">
        {() => <ResourceArticlePage slug="7-second-hook-formula" />}
      </Route>
      <Route path="/resources/rank-gym-on-google">
        {() => <ResourceArticlePage slug="rank-gym-on-google" />}
      </Route>
      <Route path="/resources/ai-30-days-content">
        {() => <ResourceArticlePage slug="ai-30-days-content" />}
      </Route>
      <Route path="/resources/instagram-bio-checklist">
        {() => <ResourceArticlePage slug="instagram-bio-checklist" />}
      </Route>
      <Route path="/resources/reels-into-memberships">
        {() => <ResourceArticlePage slug="reels-into-memberships" />}
      </Route>
      <Route path="/resources/ai-prompt-pack">
        {() => <ResourceArticlePage slug="ai-prompt-pack" />}
      </Route>
      <Route path="/resources/gym-reel-script-checklist">
        {() => <ResourceArticlePage slug="gym-reel-script-checklist" />}
      </Route>

      {/* ── New SEO article pages ─────────────────────────────────── */}
      <Route path="/resources/instagram-reels-for-gym-owners">
        {() => <ResourceArticlePage slug="instagram-reels-for-gym-owners" />}
      </Route>
      <Route path="/resources/social-media-strategy-crossfit-box">
        {() => <ResourceArticlePage slug="social-media-strategy-crossfit-box" />}
      </Route>
      <Route path="/resources/get-more-gym-members-instagram">
        {() => <ResourceArticlePage slug="get-more-gym-members-instagram" />}
      </Route>
      <Route path="/resources/gym-owner-social-media-posting-schedule">
        {() => <ResourceArticlePage slug="gym-owner-social-media-posting-schedule" />}
      </Route>
      <Route path="/resources/reels-ideas-personal-trainers">
        {() => <ResourceArticlePage slug="reels-ideas-personal-trainers" />}
      </Route>
      <Route path="/resources/fitness-studio-instagram-bio-that-converts">
        {() => <ResourceArticlePage slug="fitness-studio-instagram-bio-that-converts" />}
      </Route>
      <Route path="/resources/how-to-film-gym-reels-with-phone">
        {() => <ResourceArticlePage slug="how-to-film-gym-reels-with-phone" />}
      </Route>
      <Route path="/resources/ai-tools-gym-marketing">
        {() => <ResourceArticlePage slug="ai-tools-gym-marketing" />}
      </Route>
      <Route path="/resources/instagram-captions-for-gyms">
        {() => <ResourceArticlePage slug="instagram-captions-for-gyms" />}
      </Route>
      <Route path="/resources/local-seo-for-gyms">
        {() => <ResourceArticlePage slug="local-seo-for-gyms" />}
      </Route>
      <Route path="/resources/how-to-get-gym-website-found-google">
        {() => <ResourceArticlePage slug="how-to-get-gym-website-found-google" />}
      </Route>
      {/* ── 404 ─────────────────────────────────────────────────────── */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router base={import.meta.env.BASE_URL}>
            <AppRoutes />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
