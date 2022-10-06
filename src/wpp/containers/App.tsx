import React from "react";

import { IntlProvider } from "react-intl";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Router from "../routes/router";

const queryClient = new QueryClient();

export default function () {
  return (
    <IntlProvider locale={"zh"}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Router />
        </div>
      </QueryClientProvider>
    </IntlProvider>
  );
}
