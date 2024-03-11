import { BracketsViewer } from "./main";
import { BracketsManager } from "../manager";
import { InMemoryDatabase } from "../memory-db";

window.bracketsViewer = new BracketsViewer();
window.inMemoryDatabase = new InMemoryDatabase();
window.bracketsManager = new BracketsManager(window.inMemoryDatabase);

export { BracketsViewer };
export type { ToI18nKey } from "./lang";
export type {
  Config,
  MatchClickCallback,
  Placement,
  ViewerData,
  ParticipantImage,
  RoundNameInfo,
  MatchWithMetadata,
  Connection,
  ConnectionType,
  OriginHint,
} from "./types";
