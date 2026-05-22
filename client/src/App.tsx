import React, { useState, useEffect } from "react";
import { Router, Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

// Hash location hook for wouter — ensures routes use the URL hash (/#/path)
function useHashLocation() {
  const getHash = () => (window.location.hash ? window.location.hash.slice(1) : "/");
  const [location, setLocation] = useState(getHash);

  useEffect(() => {
    const onHashChange = () => setLocation(getHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigate = (to: string) => {
    if (to !== location) {
      window.location.hash = to;
    }
  };

  return [location, navigate] as const;
}

function RouterWrapper() {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <RouterWrapper />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
