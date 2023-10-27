import React, { Suspense } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

// ===========================

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LinearProgress />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
