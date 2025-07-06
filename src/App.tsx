import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Index from "./components/pages/Index";
// import NotFound from "./pages/NotFound";
import NotFound from "./components/pages/NotFound"
import DevOpsPage from "./components/pages/services/DevOpsPage";
import AIAgents from "./components/pages/services/AIAgents";
import CloudInfrastructure from "./components/pages/services/CloudInfrastructure";
import FullStackDevelopment from "./components/pages/services/FullStackDevelopment";
import WebDevelopment from "./components/pages/services/WebDevelopment";
import BlockchainSolutions from "./components/pages/services/BlockchainSolutions";
import AboutUs from "./components/pages/AboutUs";
import { ThemeProvider } from "./components/ThemeProvider";
// import { ThemeProvider } from "./components/ThemeProvider";
=======
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
>>>>>>> 6fd5b80e8841fdec3a375a89df6592c4ab24849e

const queryClient = new QueryClient();

const App = () => (
<<<<<<< HEAD
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
=======
>>>>>>> 6fd5b80e8841fdec3a375a89df6592c4ab24849e
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
<<<<<<< HEAD
          {/* Service Routes */}
          <Route path="/services/devops" element={<DevOpsPage/>} />
          <Route path="/services/ai-agents" element={<AIAgents/>} />
          <Route path="/services/cloud-infrastructure" element={<CloudInfrastructure />} />
          <Route path="/services/full-stack-development" element={<FullStackDevelopment />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/blockchain-solutions" element={<BlockchainSolutions />} />
          {/* About Us Route */}
          <Route path="/about" element={<AboutUs />} />
          {/* Catch-all route */}
=======
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
>>>>>>> 6fd5b80e8841fdec3a375a89df6592c4ab24849e
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
<<<<<<< HEAD
  </ThemeProvider>
=======
>>>>>>> 6fd5b80e8841fdec3a375a89df6592c4ab24849e
);

export default App;
