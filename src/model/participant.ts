import { Id } from "./common";
import { Result } from "./match";

/**
 * A participant of a stage (team or individual).
 */
export interface Participant {
  /** ID of the participant. */
  id: Id;

  /** ID of the tournament this participant belongs to. */
  tournament_id: Id;

  /** Name of the participant. */
  name: string;
}

/**
 * The results of a participant in a match.
 */
export interface ParticipantResult {
  /** If `null`, the participant is to be determined. */
  id: Id | null;

  /** Indicates where the participant comes from. */
  position?: number;

  /** If this participant forfeits, the other automatically wins. */
  forfeit?: boolean;

  /** The current score of the participant. */
  score?: number;

  /** Tells what is the result of a duel for this participant. */
  result?: Result;
}

/**
 * A participant as it would be persisted in the storage, but with extra fields.
 */
export type CustomParticipant<ExtraFields = Record<string, unknown>> =
  Participant & ExtraFields;
