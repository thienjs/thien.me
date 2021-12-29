import { Presence } from "./types";

export type SocketEvent = {
  op: Operation;
  t?: EventType;
  d: Presence | unknown;
};

export enum Operation {
  Event,
  Hello,
  Initialize,
  Heartbeat,
}

export enum EventType {
  INIT_STATE = "INIT_STATE",
  PRESENCE_UPDATE = "PRESENCE_UPDATE",
}
