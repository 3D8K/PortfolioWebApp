import React from "react";
import { ErrorWrapper, ErrorText, ErrorA } from "./style";

export function Page404() {
  return (
    <ErrorWrapper>
      <ErrorText>
        <ErrorA>404</ErrorA>
        <ErrorA>Error</ErrorA>
      </ErrorText>
    </ErrorWrapper>
  );
}
