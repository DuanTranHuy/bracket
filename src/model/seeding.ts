import { Id } from "./common";
import { CustomParticipant } from "./participant";

/**
 * The seeding for a stage.
 *
 * Each element represents a participant, which can be:
 * - A full object, with possibly extra fields.
 * - Its name (string).
 * - Its ID (only integers are supported, for backwards compatibility).
 * - Or a BYE: `null`.
 */
export type Seeding = (CustomParticipant | string | number | null)[];

/**
 * The seeding for a stage (only containing IDs or BYEs).
 */
export type IdSeeding = (Id | null)[];
