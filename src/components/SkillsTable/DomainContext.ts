import { createContext } from "react";
import { NormalizedData, Domain } from "./interfaces";

const DomainContext = createContext<NormalizedData<Domain>>({
  allIds: [],
  byId: {},
});

export default DomainContext;
