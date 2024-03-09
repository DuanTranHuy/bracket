import { Id } from "./common";
import { ParticipantResult } from "./participant";

/**
 * The possible status for a match.
 */
export enum Status {
  /** The two matches leading to this one are not completed yet. */
  Locked = 0,

  /** One participant is ready and waiting for the other one. */
  Waiting = 1,

  /** Both participants are ready to start. */
  Ready = 2,

  /** The match is in prepare. */
  Prepare = 3,

  /** The match is running. */
  Running = 4,

  /** The match is completed. */
  Completed = 5,

  /** At least one participant completed his following match. */
  Archived = 6,
}

/**
 * The possible results of a duel for a participant.
 */
export type Result = "win" | "draw" | "loss";

/**
 * A match of a round.
 */
export interface Match extends MatchResults {
  /** ID of the match. */
  id: Id;
  /** ID of the parent stage. */
  stage_id: Id;
  /** ID of the parent group. */
  group_id: Id;
  /** ID of the parent round. */
  round_id: Id;
  /** The number of the match in its round. */
  number: number;
  // The place where the match is played.
  place: string | null;
  // The date and time of the match.
  time: Date | null;
  // The label of the match.
  label: string | null;
  /** The count of match games this match has. Can be `0` if it's a simple match, or a positive number for "Best Of" matches. */
  child_count: number;
}

/**
 * Only contains information about match status and results.
 */
export interface MatchResults {
  /** Status of the match. */
  status: Status;

  /** First opponent of the match. */
  opponent1: ParticipantResult | null;

  /** Second opponent of the match. */
  opponent2: ParticipantResult | null;
}

/**
 * A game of a match.
 */
export interface MatchGame extends MatchResults {
  /** ID of the match game. */
  id: Id;

  /** ID of the parent stage. */
  stage_id: Id;

  /** ID of the parent match. */
  parent_id: Id;

  /** The number of the match game in its parent match. */
  number: number;
}
